import { Component, OnInit } from "@angular/core";
import { TrainService } from "../service/train.service";
declare var jQuery: any;

@Component({
	selector: "train-component",
	templateUrl: "template/trains/train.component.html",
	providers: [TrainService]
})

export class TrainComponent implements OnInit{
	public trains: any[];
	public sumpage: number=1;
	public currentpage: number=1;
	public sumpage_arr: any[];

	constructor(private trainservice: TrainService){

	}

	ngOnInit(){
		this.renderPage(this.currentpage);
	}

	renderPage(page: number){
		this.trainservice.GetListPerpage(page).subscribe(data=>{
			if (data)
			{
				this.trains = data['data'];
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

	deleteTrain(id: number){
		this.trainservice.DeleteTrain(id).subscribe(data=>{
			jQuery.alert('Xoá thành công!');
 		// 	let index = -1;
	 	// 	for (let i=0; i < this.trains.length; i++){
	 	// 		if (this.trains[i].id == id){
	 	// 			index = i;
	 	// 			break;
	 	// 		}
	 	// 	}
			// if (index > -1) {
			//    this.trains.splice(index, 1);
			// }	
			this.renderPage(this.currentpage);
		}, errors=>{
			jQuery.alert('Xoá không thành công!');
		});
	}

	delete(id: number, name: string){
		var self = this;
 		jQuery.confirm({
		    title: 'Xác nhận!',
		    content: 'Bạn có muốn xoá '+name+' và các lịch trình của tàu này?',
		    buttons: {
		        confirm: {
		        	btnClass: 'btn-danger',
		        	text: "Xoá",
		        	action: function(){
		        		self.deleteTrain(id);
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