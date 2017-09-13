import { Component } from '@angular/core';
import { AuthenticationService } from "./service/authentication.service";

@Component({
	selector: 'my-app',
  	templateUrl: "/template/app.component.html"
})
export class AppComponent { 
	public username :string = '';
	public islogin: boolean = false;
	constructor(
		private authencativeService: AuthenticationService){}
	checkLogin() {
		let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.api_token) {
        	this.username = currentUser.name;
        	this.islogin = true;
        } else {
        	this.username = '';
        	this.islogin = false;
        }
	}
}