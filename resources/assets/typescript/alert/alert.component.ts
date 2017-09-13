import { Component, OnInit } from '@angular/core';
 
import { AlertService } from '../service/alert.service';
 
@Component({
    selector: 'alert',
    templateUrl: 'template/alert.component.html'
})
 
export class AlertComponent {
    message: any;
 
    constructor(private alertService: AlertService) { }
 
    ngOnInit() {
        this.alertService.getMessage().subscribe(message => { this.message = message; });
    }
    closeAlert() {
    	this.message = null;
    }
}