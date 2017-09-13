<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::group(['prefix' => 'api'], function () {
	Route::group(['prefix' => 'schedule', 'middleware' => ['auth:api']], function () {
		Route::get('/', "ScheduleController@index");
		Route::get('/page/{page}', "ScheduleController@pagination");
		Route::post("/add", "ScheduleController@store");
		Route::get("/{id}/delete", "ScheduleController@destroy");
		Route::get("/{id}", "ScheduleController@edit");
		Route::post("/{id}/update", "ScheduleController@update");
	});

	Route::group(['prefix' => 'train', 'middleware' => ['auth:api']], function(){
		Route::get('/', "TrainController@index");
		Route::get('/page/{page}', "TrainController@pagination");
		Route::post("/add", "TrainController@store");
		Route::get("/{id}", "TrainController@edit");
		Route::post("/{id}/update", "TrainController@update");
		Route::get("/{id}/delete", "TrainController@destroy");
	});

	Route::group(['prefix' => 'user'], function(){
		Route::post('/register', "UserConroller@register");
		Route::post('/authenticate', "UserConroller@login");
		Route::post('/profile', "UserConroller@profile", ['middleware'=>['auth:api']]);
	});

	Route::group(['prefix' => 'address', 'middleware' => ['auth:api']], function(){
		Route::get('/', "AddressController@index");
		Route::get('/page/{page}', "AddressController@pagination");
		Route::post("/add", "AddressController@store");
		Route::get("/{id}/delete", "AddressController@destroy");
		Route::get("/{id}", "AddressController@edit");
		Route::post("/{id}/update", "AddressController@update");
	});
});

Route::any('/{any}', function () {
    return view('welcome');
})->where('any', ".*");