import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
 export class AddressService{
 	constructor(private _http: Http){}

 	GetAddress(): Observable<any[]>{
 		return this._http.get("/api/address", this.jwt()).map((responsive)=> responsive.json());
 	}

 	GetAddressPerpage(page: number): Observable<any[]>{
 		return this._http.get("/api/address/page/"+page, this.jwt()).map((responsive)=> responsive.json());
 	}

 	AddAddress(value: any): Observable<any>{
 		return this._http.post("/api/address/add", value, this.jwt()).map((responsive) => responsive.json());
 	}

 	DeleteAddress(id: number): Observable<any>{
 		return this._http.get("/api/address/"+id+"/delete", this.jwt()).map((responsive) => responsive.json());
 	}

 	GetDetailAddress(id: number): Observable<any>{
 		return this._http.get("/api/address/"+id, this.jwt()).map((responsive) => responsive.json());
 	}

 	UpdateAddress(data: any, id: number): Observable<any>{
 		return this._http.post("/api/address/"+id+"/update", data, this.jwt()).map((responsive) => responsive.json());
 	}

 	private jwt() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.api_token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.api_token });
            return new RequestOptions({ headers: headers });
        }
    }
 }