import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
declare var jQuery: any;
@Injectable()
export class UserService{
	constructor(private _http: Http){

	}
	
	Register(datas: any, image: Object): Observable<any>{
		// let headers = new Headers({'Content-Type': 'application/json'});
		var data = new FormData();
        jQuery.each(datas, function(key:String, value:String)
        {
            data.append(key, value);
        });
        if (image){
        	data.append('image', image[0]);
        }
		return this._http.post("/api/user/register", data).map((responsive)=> responsive.json());
		// return this._http.post("/api/user/register", data, {headers: headers}).map((responsive)=> responsive.json());
	}

	UpdateProfile(datas: any, image: Object): Observable<any>{
		var data = new FormData();
        jQuery.each(datas, function(key:String, value:String)
        {
            data.append(key, value);
        });
        if (image){
        	data.append('image', image[0]);
        }
        return this._http.post("/api/user/profile", data, this.jwt()).map((responsive: Response)=> responsive.json());
	}

	private jwt() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.api_token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.api_token });
            return new RequestOptions({ headers: headers });
        }
    }
}