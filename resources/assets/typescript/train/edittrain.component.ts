import { Component, OnInit, OnDestroy, ElementRef } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { AlertService } from "../service/alert.service";
import { TrainService } from "../service/train.service";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
declare var jQuery: any;

@Component({
	selector: "edittrain-component",
	templateUrl: "template/trains/edittrain.component.html",
	providers: [TrainService]
})

export class EditTrainComponent implements OnInit, OnDestroy{
	private _id: number;
	private train: any;
	private subscription: any;

	constructor(private router: Router,
		private activatedRouter: ActivatedRoute,
		private alertService: AlertService,
		private toast: ToastsManager,
		private trainService: TrainService,
		private _elRef: ElementRef){}

	ngOnInit(){
		this.subscription = this.activatedRouter.params.subscribe(params=>{
			this._id = params['id'];
		});

		this.trainService.GetDetailTrain(this._id).subscribe(data=>{
			this.train = data;
		});
	}

	update(){
		var self = this;
		this.trainService.UpdateTrain(this.train.id, this.train).subscribe(data=>{
			this.alertService.success("Cập nhật tàu thành công.", true);
			this.router.navigate(['/trains']);
		}, errors=>{
			let err = JSON.parse(errors._body);
			if (err.name){
				this.toast.error(err.name[0], "Oops!");
				jQuery(self._elRef.nativeElement).find("#name").focus();
			}
		});
	}

	ngOnDestroy(){
		this.subscription.unsubscribe();
	}
}