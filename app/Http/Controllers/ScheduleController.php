<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Schedule;
use App\Train;  
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Response;
use Validator;

class ScheduleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $schedules = Schedule::with(['train', 'from_address', 'to_address'])->orderBy("created_at", "desc")->get();
        // return $schedules->toArray();
        // return response()->json([
        //     'data' => "hello",
        // ]);
        // return response()->json(['data' => $schedules->toArray()]);
        return Response($schedules->toArray());
    }

    public function pagination($page=1)
    {
        $num_per_page = 10;
        $pages = 1;
        $currentpage = $page;
        $schedules = Schedule::with(['train', 'from_address', 'to_address'])->orderBy("created_at", "desc")->get();
        $schedules = $schedules->toArray();
        $length = count($schedules);
        $sumpage = intval($length/$num_per_page);
        if ($length%$num_per_page > 0){
            $sumpage++;
        }
        if ($currentpage > $sumpage){
            $currentpage=1;
        }
        $data = array_slice($schedules, ($currentpage-1)*$num_per_page, $num_per_page);
        $resuit = [
            'currentpage'=>$currentpage,
            'sumpage'=>$sumpage,
            'data'=>$data];
        return Response($resuit);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $schedules = new Schedule;
        $validator = Validator::make($request->all(), $schedules->rules, $schedules->messages);
        if ($validator->fails()) {
            return Response($validator->errors(), 500);
        } else {
            $tmp = Schedule::where('train_id', $request->train_id)->where(function($query) use ($request){
                $query->where('from_datetime', '<=', $request->from_datetime)
                        ->where("to_datetime", ">=", $request->from_datetime)
                        ->orwhereBetween('from_datetime', array($request->from_datetime, $request->to_datetime));
            })->first();
            if (count($tmp)>0)
            {
                return Response(['error' => ['Tàu đã có lịch trình trong khoảng thời gian bạn chọn!']], 500);
            } 

            if (intval($request->from_address)  == intval($request->to_address)){
                return Response(['error' => ['Địa chỉ đến và đi không được giống nhau.!']], 500);
            }

            $schedule = new Schedule;
            $schedule->name = $request->name;
            $schedule->train_id = $request->train_id;
            $schedule->from_address = $request->from_address;
            $schedule->to_address = $request->to_address;
            $schedule->from_datetime = $request->from_datetime;
            $schedule->to_datetime = $request->to_datetime;
            $schedule->distance = $request->distance;
            $schedule->wagon_train = $request->wagon_train;
            $schedule->note = $request->note;
            $schedule->save();
            return Response(['status'=>200]);
        }   
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $schedule = Schedule::where("id", "=", $id)->first();
        return Response($schedule->toArray());
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $schedules = new Schedule;
        $validator = Validator::make($request->all(), $schedules->rules, $schedules->messages);
        if ($validator->fails()) {
            return Response($validator->errors(), 500);
        } else {
            $tmp = Schedule::where('id', "<>", $id)->where('train_id', '=', $request->train_id)->where(function($query) use ($request){
                $query->where('from_datetime', '<=', "'".$request->from_datetime."'")
                        ->where("to_datetime", ">=", "'".$request->from_datetime."'")
                        ->orwhereBetween('from_datetime', array("'".$request->from_datetime."'", "'".$request->to_datetime."'"));
            })->first();
            if (count($tmp)>0)
            {
                return Response(['error' => ['Tàu đã có lịch trình trong khoảng thời gian bạn chọn!']], 500);
            }
            if (intval($request->from_address)  == intval($request->to_address)){
                return Response(['error' => ['Địa chỉ đến và đi không được giống nhau.!']], 500);
            }
            $schedule = Schedule::find($id);;
            $schedule->name = $request->name;
            $schedule->train_id = $request->train_id;
            $schedule->from_address = $request->from_address;
            $schedule->to_address = $request->to_address;
            $schedule->from_datetime = $request->from_datetime;
            $schedule->to_datetime = $request->to_datetime;
            $schedule->distance = $request->distance;
            $schedule->wagon_train = $request->wagon_train;
            $schedule->note = $request->note;
            $schedule->save();
            return Response(['info' => ['Cập nhật lịch trình thành công!']]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $address = Schedule::where("id", "=", $id);
        if ($address->delete() == 1){
            return Response(['status'=>200]);
        }
        return Response(['status'=>500], 500);
    }
}
