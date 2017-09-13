import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AlertService } from "../service/alert.service";
import { AuthenticationService } from "../service/authentication.service";

@Component({
	selector: "login-component",
	templateUrl: "template/user/login.component.html"
})

export class LoginComponent implements OnInit{
	model: any = {};
	returnUrl: string;
	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private authenticate: AuthenticationService,
		private alertService: AlertService
		){

	}
	ngOnInit() {
		this.authenticate.logout();
		this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
	}
	login(value) {
		this.authenticate.login(value).subscribe(data=>{
			this.alertService.success("Đăng nhập thành công.", true);
			this.router.navigate([this.returnUrl]);
		}, error=>{
			this.alertService.error(error.json().status);
		});
	}

}