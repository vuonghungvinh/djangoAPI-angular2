<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Train;
use App\Schedule;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Response;
use App\Http\Requests;
use Validator;

class TrainController extends Controller
{
    public function pagination($page=1)
    {
    	$num_per_page = 10;
        $pages = 1;
        $currentpage = $page;
        $trains = Train::orderBy("created_at", "desc")->get();
        $trains = $trains->toArray();
        $length = count($trains);
        $sumpage = intval($length/$num_per_page);
        if ($length%$num_per_page > 0){
            $sumpage++;
        }
        if ($currentpage > $sumpage){
            $currentpage=1;
        }
        $data = array_slice($trains, ($currentpage-1)*$num_per_page, $num_per_page);
        $resuit = [
            'currentpage'=>$currentpage,
            'sumpage'=>$sumpage,
            'data'=>$data];
    	return Response($resuit);
    }

    public function index(){
        $trains = Train::all();
        return Response($trains);
    }

    public function store(Request $request)
    {
    	$trains = new Train;
        $validator = Validator::make($request->all(), $trains->rules, $trains->messages);
        if ($validator->fails()) {
            return Response($validator->errors(), 500);
        } else {
            $train = new Train;
            $train->name = $request->name;
            $train->save();
            return Response(['status' => 200]);
        }
    }

    public function edit($id)
    {
        $train = Train::where("id", "=", $id)->first();
        return Response($train->toArray());
    }

    public function update(Request $request, $id)
    {
        $train = new Train;
        $validator = Validator::make($request->all(), $train->rules, $train->messages);
        if ($validator->fails()) 
        {
            return Response($validator->errors(), 500);
        }
        $train = Train::find($id);
        $train->name = $request->get("name");
        $train->save();
        return Response(['status'=>200]);
    }

    public function destroy($id)
    {
        $schedule = Schedule::where("train_id", "=", $id);
        $schedule->delete();
        $train = Train::where("id", "=", $id);
        if ($train->delete() == 1){
            return Response(['status'=>200]);
        }
        return Response(['status'=>500], 500);
    }
}
