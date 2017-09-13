import { Injectable } from "@angular/core";
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AlertService }  from "../service/alert.service";

@Injectable()
export class AuthGurad implements CanActivate{
	constructor(private router: Router, private alertService: AlertService){

	}
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		if (localStorage.getItem("currentUser")){
			return true;
		}
		this.alertService.error("Vui lòng đăng nhập.", true);
		this.router.navigate(['login'], {queryParams: {returnUrl: state.url}});
		return false;
	}
}