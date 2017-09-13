import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { AddressService } from "../service/address.service";
import { AlertService } from "../service/alert.service";


@Component({
	selector: "editaddress-component",
	templateUrl: "template/address/editaddress.component.html",
	providers: [AddressService]
})

export class EditAddressComponent implements OnInit, OnDestroy{
	private _id: number;
	private subcription: any;
	private address: any;

	constructor(private router: Router,
		private activatedRouter: ActivatedRoute,
		private addressService: AddressService,
		private alterService: AlertService){}

	ngOnInit(){
		this.subcription = this.activatedRouter.params.subscribe(params=>{
			this._id = params['id'];
		});
		this.addressService.GetDetailAddress(this._id).subscribe(data=>{
			if (data.length > 0){
				this.address = data[0];
			} else {
				this.address = null;
			}
		});
	}

	update(){
		this.addressService.UpdateAddress(this.address, this.address.id).subscribe(data=>{
			this.alterService.success("Cập nhật địa điểm thành công.", true);
			this.router.navigate(['/address']);
		}, errors=>{
			let err = JSON.parse(errors._body);
			this.alterService.error(err.name[0], true);
		});
	}

	ngOnDestroy(){
		this.subcription.unsubscribe();
	}
}