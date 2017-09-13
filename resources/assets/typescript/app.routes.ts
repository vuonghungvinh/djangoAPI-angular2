import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { TrainComponent } from "./train/train.component";
import { LoginComponent } from "./user/login.component";
import { RegisterComponent } from "./user/register.component";
import { AuthGurad } from "./guards/auth.guard";
import { AddScheduleComponent } from "./home/addschedule.component";
import { AddressComponent } from "./address/address.component";
import { AddAddressComponent } from "./address/addaddress.component";
import { EditAddressComponent } from "./address/editaddress.component";
import { EditScheduleComponent } from "./home/editschedule.component";
import { AddTrainComponent } from "./train/addtrain.component";
import { EditTrainComponent } from "./train/edittrain.component";
import { ProfileComponent } from "./user/profile.component";

const routing: Routes = [
	{path: "", component: HomeComponent, canActivate: [AuthGurad]},
	{path: "trains", component: TrainComponent, canActivate: [AuthGurad]},
	{path: "trains/add", component: AddTrainComponent, canActivate: [AuthGurad]},
	{path: "trains/:id", component: EditTrainComponent, canActivate: [AuthGurad]},
	{path: "address", component: AddressComponent, canActivate: [AuthGurad]},
	{path: "address/add", component: AddAddressComponent, canActivate: [AuthGurad]},
	{path: "address/:id", component: EditAddressComponent, canActivate: [AuthGurad]},
	{path: "profile", component: ProfileComponent, canActivate: [AuthGurad]},
	{path: "login", component: LoginComponent},
	{path: "register", component: RegisterComponent},
	{path: "schedule/add", component: AddScheduleComponent, canActivate: [AuthGurad]},
	{path: "schedule/:id", component: EditScheduleComponent, canActivate: [AuthGurad]},
	{ path: '**', redirectTo: '' }
]

export const appRoutes = RouterModule.forRoot(routing)