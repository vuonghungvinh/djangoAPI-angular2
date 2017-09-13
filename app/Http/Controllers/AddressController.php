<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\ServiceProvider;
use App\Address;
use App\Schedule;
use Illuminate\Http\Response;
use App\Http\Requests;
use Validator;

class AddressController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $address = Address::all();
        return Response($address->toArray());
    }

    public function pagination($page=1)
    {
        $num_per_page = 10;
        $pages = 1;
        $currentpage = $page;
        $address = Address::orderBy("created_at", "desc")->get();
        $address = $address->toArray();
        $length = count($address);
        $sumpage = intval($length/$num_per_page);
        if ($length%$num_per_page > 0){
            $sumpage++;
        }
        if ($currentpage > $sumpage){
            $currentpage=1;
        }
        $data = array_slice($address, ($currentpage-1)*$num_per_page, $num_per_page);
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
        $address = new Address;
        $validator = Validator::make($request->all(), $address->rules, $address->messages);
        if ($validator->fails()) 
        {
            return Response($validator->errors(), 500);
        }
        $address->name = $request->get("name");
        $address->save();
        return Response(['status'=>200, "data"=>$address]);
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
        $address = Address::where("id", "=", $id)->get();
        return Response($address->toArray());
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
        $address = new Address;
        $validator = Validator::make($request->all(), $address->rules, $address->messages);
        if ($validator->fails()) 
        {
            return Response($validator->errors(), 500);
        }
        $address = Address::find($id);
        $address->name = $request->get("name");
        $address->save();
        return Response(['status'=>200, "data"=>$address]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $schedule = Schedule::where("from_address", "=", $id)->orWhere("to_address", "=", $id);
        $schedule->delete();
        $address = Address::where("id", "=", $id);
        return $address->delete();
    }
}
