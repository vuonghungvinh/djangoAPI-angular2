<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $table="address";
    public   $rules = [
	    'name' => 'required|unique:address|max:255',
	];
	public $messages = [
		'name.required' => "Bạn chưa nhập địa điểm.",
		'name.unique' => "Địa điểm bạn nhập đã bị trùng.",
		'name.max' => "Độ dài tối đa là 255 kí tự.",
	];
}
