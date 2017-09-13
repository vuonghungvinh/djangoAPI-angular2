import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class ScheduleService{
	constructor(private _http: Http){

	}

	GetList(): Observable<any[]> {
		return this._http.get("/api/schedule", this.jwt()).map((responsive: Response)=> responsive.json());
	}

	GetSchedulePerPage(page: number): Observable<any[]> {
		return this._http.get("/api/schedule/page/"+page, this.jwt()).map((response: Response)=> response.json());
	}

	AddSchedule(data: any): Observable<any>{
		return this._http.post("/api/schedule/add", data, this.jwt()).map((responsive: Response)=> responsive.json());
	}

	DeleteSchedule(id: number): Observable<any>{
		return this._http.get("/api/schedule/"+ id +"/delete", this.jwt()).map((responsive: Response) => responsive.json());
	}

	GetDetailSchedule(id: number): Observable<any>{
		return this._http.get("/api/schedule/"+id, this.jwt()).map((response: Response)=> response.json());
	}
	
	UpdateSchedule(id: number, data: any): Observable<any>{
		return this._http.post("/api/schedule/"+ id +"/update", data, this.jwt()).map((response: Response) => response.json());
	}

	private jwt() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.api_token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.api_token });
            return new RequestOptions({ headers: headers });
        }
    }
}