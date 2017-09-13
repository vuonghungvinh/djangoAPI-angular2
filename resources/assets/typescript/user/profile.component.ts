import { Component, OnInit, ElementRef } from "@angular/core";
import { AuthenticationService } from "../service/authentication.service";
import { UserService } from "../service/user.service";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { AlertService } from "../service/alert.service";
declare var jQuery: any;

@Component({
	selector: "profile-component",
	templateUrl: "template/user/profile.component.html",
	providers: [UserService]
})

export class ProfileComponent implements OnInit{
	private profile: any;
	image: Object;

	constructor(private authentication: AuthenticationService,
		private userService: UserService,
		private toast: ToastsManager,
		private alter: AlertService,
		private _elRef: ElementRef){

	}

	ngOnInit(){
		this.profile = this.authentication.getUser();
		this.profile.password = '';
	}

	getFiles(file){
		this.image = file.target.files;
	}

	profileForm(){
		var self = this;
		this.userService.UpdateProfile(this.profile, this.image).subscribe(data=>{
			this.alter.success("Cập nhật thông tin thành công.", false);
			if (data.data && data.data.api_token) {
				localStorage.setItem('currentUser', JSON.stringify(data.data));
			}
			this.profile = this.authentication.getUser();
			this.profile.password = '';
		}, errors=>{
			let err = JSON.parse(errors._body);
			if (err.firstname){
				this.toast.error(err.firstname[0], "Oops!");
				jQuery(self._elRef.nativeElement).find("#firstname").focus();
				return;
			}
			if (err.name){
				this.toast.error(err.name[0], "Oops!");
				jQuery(self._elRef.nativeElement).find("#name").focus();
				return;
			}
			if (err.address){
				this.toast.error(err.address[0], "Oops!");
				jQuery(self._elRef.nativeElement).find("#address").focus();
				return;
			}
			if (err.phone){
				this.toast.error(err.phone[0], "Oops!");
				jQuery(self._elRef.nativeElement).find("#phone").focus();
				return;
			}
			if (err.password){
				this.toast.error(err.password[0], "Oops!");
				jQuery(self._elRef.nativeElement).find("#password").focus();
				jQuery(self._elRef.nativeElement).find("#password").val('');
				jQuery(self._elRef.nativeElement).find("#password-confirm").val('');
				return;
			}
		});
	}
}