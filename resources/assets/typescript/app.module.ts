///<reference path="../../../typings/index.d.ts"/>
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HomeComponent } from "./home/home.component";
import { appRoutes } from "./app.routes";
import { ScheduleService } from "./service/schedule.service";
import {HttpModule} from "@angular/http";
import { FormsModule} from "@angular/forms";
import { TrainComponent } from "./train/train.component";
import { LoginComponent } from "./user/login.component";
import { RegisterComponent } from "./user/register.component";
import { AlertService } from "./service/alert.service";
import { AlertComponent } from "./alert/alert.component";
import { AuthGurad } from "./guards/auth.guard";
import { AuthenticationService } from "./service/authentication.service";
import { AddScheduleComponent } from "./home/addschedule.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { AddressComponent } from "./address/address.component";
import { AddAddressComponent } from "./address/addaddress.component";
import { EditAddressComponent } from "./address/editaddress.component";
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { EditScheduleComponent } from "./home/editschedule.component";
import { AddTrainComponent } from "./train/addtrain.component";
import { EditTrainComponent } from "./train/edittrain.component";
import { ProfileComponent } from "./user/profile.component";

@NgModule({
  imports:      [ 
  	BrowserModule,
  	appRoutes,
  	HttpModule,
  	FormsModule,
    ToastModule.forRoot()
    // DatePickerModule
  ],
  declarations: [ 
  	AppComponent,
  	HomeComponent,
    TrainComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    AddScheduleComponent,
    NavbarComponent,
    AddressComponent,
    AddAddressComponent,
    EditAddressComponent,
    EditScheduleComponent,
    AddTrainComponent,
    EditTrainComponent,
    ProfileComponent
  ],
  providers: [
  	ScheduleService,
    AlertService,
    AuthGurad,
    AuthenticationService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }