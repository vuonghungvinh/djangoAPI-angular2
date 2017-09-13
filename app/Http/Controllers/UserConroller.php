<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\ServiceProvider;
// use Illuminate\Support\Facades\Response;
use Illuminate\Http\Response;
use App\User;
use Validator;
use Illuminate\Support\Facades\Auth;

class UserConroller extends Controller
{
    public function register(Request $request)
    {
    	$rules = [
            'firstname'  => 'required',
            'name'  => 'required',
            'address'  => 'required',
    		'phone'	=> 'required',
    		'email' => 'required|unique:users,email',
    		'password' => 'required|min:6' 
    	];
    	$messages = [
            'firstname.required' => "Bạn chưa nhập họ.",
            'name.required' => "Bạn chưa nhập tên đăng nhập.",
            'phone.required' => "Bạn chưa nhập số điện thoại.",
    		'address.required' => "Bạn chưa nhập địa chỉ.",
    		'email.required' => "Bạn chưa nhập địa chỉ email.",
    		'email.unique' => "Email bạn nhập đã sử dụng.",
    		'password.required' => "Bạn chưa nhập mật khẩu.",
    		'password.min' => "Mật khẩu có ít nhất 6 kí tự."
    	];
    	$validator = Validator::make($request->all(), $rules, $messages);
        if ($validator->fails()) 
        {
        	return Response($validator->errors(), 500);
        }
        $user = new User;
        $user->name = $request->get("name");
        $user->email = $request->get("email");
        $user->firstname = $request->get("firstname");
        $user->address = $request->get("address");
        $user->phone = $request->get("phone");
        $user->password = bcrypt($request->get("password"));
        $user->api_token = str_random(100);
        $user->save();
        if( $request->hasFile('image') ) {
            $file = $request->file('image');
            $imagename = $file->getClientOriginalName();
            $path = base_path() . '/public/image/avatar/'.$user->id.'/';
            $file->move($path, $imagename);
            $user->image = $imagename;
            $user->save();
        }
    	return Response(['status'=>200, "data"=>$user]);
    }

    public function profile(Request $request)
    {
        $rules = [
            'firstname'  => 'required',
            'name'  => 'required',
            'address'  => 'required',
            'phone' => 'required'
        ];
        $messages = [
            'firstname.required' => "Bạn chưa nhập họ.",
            'name.required' => "Bạn chưa nhập tên đăng nhập.",
            'phone.required' => "Bạn chưa nhập số điện thoại.",
            'address.required' => "Bạn chưa nhập địa chỉ."
        ];
        $rules1 = [
            'firstname'  => 'required',
            'name'  => 'required',
            'address'  => 'required',
            'phone' => 'required',
            'password' => 'required|min:6' 
        ];
        $messages1 = [
            'firstname.required' => "Bạn chưa nhập họ.",
            'name.required' => "Bạn chưa nhập tên đăng nhập.",
            'phone.required' => "Bạn chưa nhập số điện thoại.",
            'address.required' => "Bạn chưa nhập địa chỉ.",
            'password.required' => "Bạn chưa nhập mật khẩu.",
            'password.min' => "Mật khẩu có ít nhất 6 kí tự."
        ];
        $password = $request->get("password");
        if (strlen($password) > 0)
        {
            $validator = Validator::make($request->all(), $rules1, $messages1);
            if ($validator->fails()) 
            {
                return Response($validator->errors(), 500);
            }
            $user = User::find($request->get("id"));
            $user->name = $request->get("name");
            $user->firstname = $request->get("firstname");
            $user->address = $request->get("address");
            $user->phone = $request->get("phone");
            $user->password = bcrypt($request->get("password"));
            $user->save();
        } else 
        {
            $validator = Validator::make($request->all(), $rules, $messages);
            if ($validator->fails()) 
            {
                return Response($validator->errors(), 500);
            }
            $user = User::find($request->get("id"));
            $user->name = $request->get("name");
            $user->firstname = $request->get("firstname");
            $user->address = $request->get("address");
            $user->phone = $request->get("phone");
            $user->save();
        }
        
        if( $request->hasFile('image') ) {
            $file = $request->file('image');
            $imagename = $file->getClientOriginalName();
            $path = base_path() . '/public/image/avatar/'.$user->id;
            if (is_file($path.'/'.$user->image)) {
                unlink($path.'/'.$user->image);
            }
            $file->move($path, $imagename);
            $user->image = $imagename;
            $user->save();
        }
        return Response(['status'=>200, "data"=>$user]);
    }

    public function login(Request $request)
    {
        $this->validate($request, [
            'email' => 'required',
            'password' => 'required|min:6'
        ], [
            'email.required' => 'Vui long nhập email',
            'password.required' => 'Vui lòng nhập mật khâur',
            'password.min' => 'Mật khẩu có ít nhất 6 kí tự'
        ]);
        if (Auth::attempt(['email' => $request->email, 'password' => $request->password])) {
            return Response(Auth::user(), 200);
        } else {
            return Response(["status"=>"Tài khoản hoặc mật khẩu không đúng."], 500);
        }
    }
}
