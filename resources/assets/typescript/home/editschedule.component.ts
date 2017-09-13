import { Component, OnInit, OnDestroy, ElementRef } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { ScheduleService } from "../service/schedule.service";
import { AlertService } from "../service/alert.service";
import { AddressService } from "../service/address.service";
import { TrainService } from "../service/train.service";
import moment from 'moment';
declare var jQuery: any;
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
	selector: "editschedule-component",
	templateUrl: "template/homepage/editshedule.component.html",
	providers: [ScheduleService, AddressService, TrainService]
})

export class EditScheduleComponent implements OnDestroy, OnInit{
	private _id: number;
	private subcription: Subscription;
	private schedule: any;
	private address: any[];
	private trains: any[];

	constructor(private router: Router,
		private activeRouter: ActivatedRoute,
		private alterService: AlertService,
		private scheduleService: ScheduleService,
		private addressService: AddressService,
		private _elRef: ElementRef,
		private trainService: TrainService,
		private toast: ToastsManager){

	}

	ngOnInit(){
		this.subcription = this.activeRouter.params.subscribe(params=>{
			this._id = params['id'];
		});

		this.trainService.GetList().subscribe(data=>{
			this.trains = data;
		});

		this.addressService.GetAddress().subscribe(data=>{
			this.address = data;
		});

		this.scheduleService.GetDetailSchedule(this._id).subscribe(data=>{
			this.schedule = data;
			this.schedule.distance = parseInt(this.schedule.distance);
		});

		var self = this;
		setTimeout(function(){
			jQuery(self._elRef.nativeElement).find("#from_datetime").datetimepicker({
				format: "YYYY-MM-DD HH:mm:00",
				minDate: moment("YYYY-MM-DD HH:mm:00")
			}).on("dp.change", function(e){
				self.schedule.from_datetime = e.date.format("YYYY-MM-DD HH:mm:00");
				jQuery(self._elRef.nativeElement).find("#to_datetime").data("DateTimePicker").minDate(e.date);
			});

			jQuery(self._elRef.nativeElement).find("#to_datetime").datetimepicker({
				format: "YYYY-MM-DD HH:mm:00",
				minDate: moment("YYYY-MM-DD HH:mm:00")
			}).on("dp.change", function(e){
				//self.datetoChanged(e.date.format("YYYY-MM-DD HH:mm:00"));
				self.schedule.to_datetime = e.date.format("YYYY-MM-DD HH:mm:00");
			});
		},1000);
	}

	update(){
		var self = this;
		this.scheduleService.UpdateSchedule(this.schedule.id, this.schedule).subscribe(data=>{
			this.alterService.success("Cập nhật lịch trình thành công.", true);
			this.router.navigate(['/']);
		}, errors=>{
			let err = JSON.parse(errors._body);
			if (err.train_id){
				this.toast.error(err.train_id[0], "Oops!");
				jQuery(self._elRef.nativeElement).find("#train_id").focus();
				return;
			}
			if (err.name){
				this.toast.error(err.name[0], "Oops!");
				jQuery(self._elRef.nativeElement).find("#name").focus();
				return;
			}
			if (err.from_address){
				this.toast.error(err.from_address[0], "Oops!");
				jQuery(self._elRef.nativeElement).find("#from_address").focus();
				return;
			}
			if (err.to_address){
				this.toast.error(err.to_address[0], "Oops!");
				jQuery(self._elRef.nativeElement).find("#to_address").focus();
				return;
			}
			if (err.from_datetime){
				this.toast.error(err.from_datetime[0], "Oops!");
				jQuery(self._elRef.nativeElement).find("#from_datetime").focus();
				return;
			}
			if (err.to_datetime){
				this.toast.error(err.to_datetime[0], "Oops!");
				jQuery(self._elRef.nativeElement).find("#to_datetime").focus();
				return;
			}
			if (err.distance){
				this.toast.error(err.distance[0], "Oops!");
				jQuery(self._elRef.nativeElement).find("#distance").focus();
				return;
			}
			if (err.wagon_train){
				this.toast.error(err.wagon_train[0], "Oops!");
				jQuery(self._elRef.nativeElement).find("#wagon_train").focus();
				return;
			}
			if (err.note){
				this.toast.error(err.note[0], "Oops!");
				jQuery(self._elRef.nativeElement).find("#note").focus();
				return;
			}
			if (err.error){
				this.toast.error(err.error[0], "Oops!");
			}
		});
	}

	ngOnDestroy(){
		this.subcription.unsubscribe();
	}
}