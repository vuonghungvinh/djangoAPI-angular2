import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class TrainService{
	constructor(private _http: Http){

	}
	GetList(): Observable<any[]>{
		return this._http.get("/api/train", this.jwt()).map((responsive)=> responsive.json());
	}

	GetListPerpage(page: number): Observable<any[]>{
		return this._http.get("/api/train/page/"+page, this.jwt()).map((responsive)=> responsive.json());
	}

	AddTrain(data: any): Observable<any>{
		return this._http.post("/api/train/add", data, this.jwt()).map((response: Response) => response.json());
	}

	GetDetailTrain(id: number): Observable<any>{
		return this._http.get("/api/train/"+id, this.jwt()).map((response: Response)=> response.json());
	}

	UpdateTrain(id: number, data: any): Observable<any>{
		return this._http.post("/api/train/"+ id +"/update", data, this.jwt()).map((response: Response)=> response.json());
	}

	DeleteTrain(id: number): Observable<any>{
		return this._http.get("/api/train/"+ id +"/delete", this.jwt()).map((response: Response)=> response.json());
	}
	
	private jwt() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.api_token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.api_token });
            return new RequestOptions({ headers: headers });
        }
    }
}