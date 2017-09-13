import { Component } from '@angular/core';
import { AuthenticationService } from "../service/authentication.service";
import { Router } from "@angular/router";
 
@Component({
    selector: 'navbar-component',
    templateUrl: 'template/navbar.component.html'
})
 
export class NavbarComponent {
    status: any = {username: '', islogin: false};
    constructor(private authencativeService: AuthenticationService,
    	private router: Router) { }

    logout() {
		this.authencativeService.logout();
		this.router.navigate(['/login']);
	}
}