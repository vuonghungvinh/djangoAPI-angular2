import { Component, OnInit, ElementRef } from "@angular/core";
import { AddressService } from "../service/address.service";

declare var jQuery: any;
 @Component({
 	selector: "address-component",
 	templateUrl: "template/address/address.component.html",
 	providers: [AddressService]
 })

 export class AddressComponent implements OnInit{
 	public address: any[];
 	public sumpage: number=1;
	public currentpage: number=1;
	public sumpage_arr: any[];

 	constructor(private _addressService: AddressService,
 		private _elRef: ElementRef){}

 	ngOnInit(){
 		this.renderPage(this.currentpage);
 	}

 	renderPage(page: number){
		this._addressService.GetAddressPerpage(page).subscribe(data=>{
			if (data)
			{
				this.address = data['data'];
				this.currentpage = data['currentpage'];
				this.sumpage = data['sumpage'];

				var items: number[] = [];
				for(var i = 1; i <= this.sumpage; i++){
				    items.push(i);
				}
				this.sumpage_arr = items;
			}
		});
	}

	prev(){
		if (this.currentpage>1){
			this.currentpage--;
			this.renderPage(this.currentpage);
		}
	}

	selectpage(page){
		if (this.currentpage != page){
			this.currentpage=page;
			this.renderPage(this.currentpage);
		}
	}

	next(){
		if (this.currentpage < this.sumpage){
			this.currentpage++;
			this.renderPage(this.currentpage);
		}
	}

 	deleteAddress(id: number){
 		this._addressService.DeleteAddress(id).subscribe(data=>{
 			jQuery.alert('Xoá thành công!');
 		// 	let index = -1;
	 	// 	for (let i=0; i < this.address.length; i++){
	 	// 		if (this.address[i].id == id){
	 	// 			index = i;
	 	// 			break;
	 	// 		}
	 	// 	}
			// if (index > -1) {
			//    this.address.splice(index, 1);
			// }	
			this.renderPage(this.currentpage);
 		}, errors=>{
 			jQuery.alert('Xoá không thành công!');
 		});
 	}

 	delete(id:number, name: string){
 		var self = this;
 		jQuery.confirm({
		    title: 'Xác nhận!',
		    content: 'Bạn có muốn xoá '+name+' và các lịch trình của địa điểm này?',
		    buttons: {
		        confirm: {
		        	btnClass: 'btn-danger',
		        	text: "Xoá",
		        	action: function(){
		        		self.deleteAddress(id);
		        	}
		        },
		        cancel: {
		        	text: "Hủy bỏ",
		        	btnClass: 'btn-green',
		        	action: function(){
		        		// $.alert('Cancel!');
		        	}
		        }
		    }
		});
 	}
 }