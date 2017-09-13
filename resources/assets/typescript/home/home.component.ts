import { Component, OnInit } from '@angular/core';
import { ScheduleService } from "../service/schedule.service";
declare var jQuery: any;

@Component({
	selector: "home-component",
	templateUrl: "template/homepage/home.component.html",
})
export class HomeComponent implements OnInit{
	public schedules: any[];
	public sumpage: number=1;
	public currentpage: number=1;
	public sumpage_arr: any[];

	constructor(private scheduleservice: ScheduleService){

	}
	ngOnInit()
	{
		this.renderPage(this.currentpage);
	}

	renderPage(page: number){
		this.scheduleservice.GetSchedulePerPage(page).subscribe(data=>{
			if (data)
			{
				this.schedules = data['data'];
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

	deleteSchedule(id: number){
		this.scheduleservice.DeleteSchedule(id).subscribe(data=>{
			jQuery.alert('Xoá thành công!');
 		// 	let index = -1;
	 	// 	for (let i=0; i < this.schedules.length; i++){
	 	// 		if (this.schedules[i].id == id){
	 	// 			index = i;
	 	// 			break;
	 	// 		}
	 	// 	}
			// if (index > -1) {
			//    this.schedules.splice(index, 1);
			// }	
			this.renderPage(this.currentpage);
		}, error=>{
			jQuery.alert('Xoá không thành công!');
		});
	}

	delete(id: number, name: string){
		var self = this;
 		jQuery.confirm({
		    title: 'Xác nhận!',
		    content: 'Bạn có muốn xoá '+name+'?',
		    buttons: {
		        confirm: {
		        	btnClass: 'btn-danger',
		        	text: "Xoá",
		        	action: function(){
		        		self.deleteSchedule(id);
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