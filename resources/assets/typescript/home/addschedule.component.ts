import { Component, OnInit, ElementRef } from "@angular/core";
import { ScheduleService } from "../service/schedule.service";
import { TrainService } from "../service/train.service";
import { AddressService } from "../service/address.service";
import { AlertService } from "../service/alert.service";
import { Router } from "@angular/router";
import moment from 'moment';
declare var jQuery: any;
var $ = jQuery;
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
// declare var moment: any;

@Component({
	selector: "add-schedule-component",
	templateUrl: 'template/homepage/addschedule.component.html',
	providers: [TrainService, AddressService]
})

export class AddScheduleComponent implements OnInit{
	private trains: any[];
	private address: any[];
	private self: any;
	public from_datetime1: string='';
	public to_datetime1: string='';

	constructor(private scheduleService: ScheduleService,
		private trainService: TrainService,
		private _elRef: ElementRef,
		private addressService: AddressService,
		private alertService: AlertService,
		private router: Router,
		private toast: ToastsManager){
	}

	datefromChanged(date) {
	   this.from_datetime1 = date;
	}

	datetoChanged(date) {
	   this.to_datetime1 = date;
	}

	ngOnInit(){
		this.trainService.GetList().subscribe(data=>{
			this.trains = data;
		});

		this.addressService.GetAddress().subscribe(data=>{
			this.address = data;
		});

		var self = this;
		jQuery(this._elRef.nativeElement).find("#from_datetime").datetimepicker({
			format: "YYYY-MM-DD HH:mm:00",
			showTodayButton: true,
			minDate: moment("YYYY-MM-DD HH:mm:00")
		}).on("dp.change", function(e){
			self.datefromChanged(e.date.format("YYYY-MM-DD HH:mm:00"));
			jQuery(self._elRef.nativeElement).find("#to_datetime").data("DateTimePicker").minDate(e.date);
		});

		jQuery(this._elRef.nativeElement).find("#to_datetime").datetimepicker({
			format: "YYYY-MM-DD HH:mm:00",
			showTodayButton: true,
			minDate: moment("YYYY-MM-DD HH:mm:00")
		}).on("dp.change", function(e){
			self.datetoChanged(e.date.format("YYYY-MM-DD HH:mm:00"));
		});
	}

	save(value: any) {
		var self = this;
		this.scheduleService.AddSchedule(value).subscribe(data=>{
			this.alertService.success("Thêm mới lịch trình thành công.", true);
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
}