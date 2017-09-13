import { Component, ElementRef } from "@angular/core";
import { TrainService } from "../service/train.service";
import { AlertService } from "../service/alert.service";
import { Router } from "@angular/router";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
declare var jQuery: any;

@Component({
	selector: "addtrain-component",
	templateUrl: "template/trains/addtrain.component.html",
	providers: [TrainService]
})

export class AddTrainComponent{
	constructor(private trainService: TrainService,
		private router: Router,
		private alterService: AlertService,
		private toast: ToastsManager,
		private _elRef: ElementRef){}

	save(value: any){
		var self = this;
		this.trainService.AddTrain(value).subscribe(data=>{
			this.alterService.success("Thêm mới tàu thành công!", true);
			this.router.navigate(['/trains']);
		}, errors => {
			let err = JSON.parse(errors._body);
			if (err.name){
				this.toast.error(err.name[0], "Oops!");
				jQuery(self._elRef.nativeElement).find("#name").focus();
			}
		});
	}
}