<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    public   $rules = [
	    'name' => 'required|max:255',
        'train_id' => 'required|integer|min:1|exists:trains,id',
        'from_address' => 'required|integer|min:1|exists:address,id',
        'to_address' => 'required|integer|min:1|exists:address,id',
        'from_datetime' => 'required|date|date_format:Y-m-d H:i:s',
        'to_datetime' => 'required|date|after:from_datetime',
        'distance' => 'required|numeric|min:1',
        'wagon_train' => 'required|integer|min:1',
        'note' => 'required',
	];

    public $messages = [
        'name.required' => "Bạn chưa nhập tên lịch trình",
        'name.max' => "Tên lịch trình không quá 255 kí tự",
        'train_id.required' => "Bạn chưa chọn tàu",
        'train_id.integer' => "Tàu phải là số nguyên",
        'train_id.min' => "ID của tàu phải lớn hơn 0",
        'train_id.exists' => "Tàu bạn chọn không có trong danh sách tàu",
        'from_address.required' => "Bạn chưa nhập địa chỉ đi",
        'from_address.integer' => "Địa chỉ đi phải là 1 số nguyên.",
        'from_address.min' => "Địa chỉ đi phải lớn hơn 0.",
        'from_address.exists' => "Địa chỉ đi không tồn tại.",
        'to_address.required' => "Bạn chưa nhập địa chỉ đến",
        'to_address.integer' => "Địa chỉ đến phải là 1 số nguyên.",
        'to_address.min' => "Địa chỉ đến phải lớn hơn 0.",
        'to_address.exists' => "Địa chỉ đến không tồn tại.",
        'from_datetime.required' => "Bạn chưa nhập thời gian đi",
        'from_datetime.date' => "Thời gian bạn nhập không đúng định dạng",
        'to_datetime.date' => "Thời gian bạn nhập không đúng định dạng",
        'to_datetime.required' => "Bạn chưa nhập thời gian đến",
        "to_datetime.after" => "Thời gian đến phải lớn hơn thời gian đi",
        'distance.required' => "Bạn chưa nhập khoảng cách",
        'distance.numeric' => "Khoảng cách phải là số",
        'distance.min' => "Khoảng cách phải lớn hơn 0",
        'wagon_train.required' => "Bạn chưa nhập số toa",
        'wagon_train.integer' => "Số toa phải là số nguyên",
        'wagon_train.min' => "Số toa phải lớn hơn 0",
        'note.required' => "Bạn chưa nhập ghi chú"
    ];

	public function train()
    {
        return $this->belongsTo('App\Train', 'train_id');
    }

    public function from_address()
    {
        return $this->belongsTo('App\Address', 'from_address');
    }

    public function to_address()
    {
        return $this->belongsTo('App\Address', 'to_address');
    }
}
