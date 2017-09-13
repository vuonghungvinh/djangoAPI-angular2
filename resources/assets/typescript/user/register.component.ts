import { Component } from "@angular/core";
import { UserService }  from "../service/user.service";
import { AlertService } from '../service/alert.service';
import { Router } from "@angular/router";

@Component({
	selector: "register-component",
	templateUrl: "template/user/register.component.html",
	providers: [UserService]
})
export class RegisterComponent{
	public errors: string='';
	image: Object;

	constructor(private userService: UserService, private alertService: AlertService, private router: Router){

	}

	CloseMessage() {
		this.errors = null;
	}

	getFiles(event) {
		this.image = event.target.files;
	}

	registerForm(value){
		this.userService.Register(value, this.image).subscribe(data=>{
			this.alertService.success("Đăng kí thành công.", true);
			this.router.navigate(['login']);
		}, errors=>{
			let err = JSON.parse(errors._body);
			let er: string = '';
			if (err.password) {
				er += err.password[0] || '';
			}
			if (err.email) {
				if (er.length > 0){
					er += "<br>" + err.email[0] || '';
				} else {
					er += err.email[0] || '';
				}
			}
			this.errors = er;
		});
	}
}