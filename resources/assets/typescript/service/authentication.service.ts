import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class AuthenticationService {
	constructor(private _http: Http){

	}
	login (data: any) {
		return this._http.post('/api/user/authenticate', data).map((response: Response)=>{
			let user = response.json();
			if (user && user.api_token) {
				localStorage.setItem('currentUser', JSON.stringify(user));
			}
		});
	}

	logout() {
	 	localStorage.removeItem("currentUser");
	}

	checkLogin() {
		let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.api_token) {
        	return true;
        } else {
        	return false;
        }
	}

	getUser() {
		let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.api_token) {
        	return currentUser;
        } else {
        	return {};
        }
	}
}