import { Component } from "@angular/core";
import { AddressService } from "../service/address.service";
import { AlertService } from "../service/alert.service";
import { Router } from "@angular/router";

@Component({
	selector: "addaddress-component",
	templateUrl: "template/address/addaddress.component.html",
	providers: [AddressService]
})

export class AddAddressComponent{
	constructor(private _addressService: AddressService,
		private allterService: AlertService,
		private router: Router){}

	save(value: any){
		this._addressService.AddAddress(value).subscribe(data=>{
			this.allterService.success("Thêm địa điểm thành công", true);
			this.router.navigate(['address']);
		}, errors=>{
			let err = JSON.parse(errors._body);
			this.allterService.error(err.name[0], true);
		});
	}
}