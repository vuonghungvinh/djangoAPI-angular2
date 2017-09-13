System.register(['@angular/core', '@angular/platform-browser', './app.component', "./home/home.component", "./app.routes", "./service/schedule.service", "@angular/http", "@angular/forms", "./train/train.component", "./user/login.component", "./user/register.component", "./service/alert.service", "./alert/alert.component", "./guards/auth.guard", "./service/authentication.service", "./home/addschedule.component", "./navbar/navbar.component", "./address/address.component", "./address/addaddress.component", "./address/editaddress.component", 'ng2-toastr/ng2-toastr', "./home/editschedule.component", "./train/addtrain.component", "./train/edittrain.component", "./user/profile.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, platform_browser_1, app_component_1, home_component_1, app_routes_1, schedule_service_1, http_1, forms_1, train_component_1, login_component_1, register_component_1, alert_service_1, alert_component_1, auth_guard_1, authentication_service_1, addschedule_component_1, navbar_component_1, address_component_1, addaddress_component_1, editaddress_component_1, ng2_toastr_1, editschedule_component_1, addtrain_component_1, edittrain_component_1, profile_component_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            },
            function (schedule_service_1_1) {
                schedule_service_1 = schedule_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (train_component_1_1) {
                train_component_1 = train_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            },
            function (alert_service_1_1) {
                alert_service_1 = alert_service_1_1;
            },
            function (alert_component_1_1) {
                alert_component_1 = alert_component_1_1;
            },
            function (auth_guard_1_1) {
                auth_guard_1 = auth_guard_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (addschedule_component_1_1) {
                addschedule_component_1 = addschedule_component_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (address_component_1_1) {
                address_component_1 = address_component_1_1;
            },
            function (addaddress_component_1_1) {
                addaddress_component_1 = addaddress_component_1_1;
            },
            function (editaddress_component_1_1) {
                editaddress_component_1 = editaddress_component_1_1;
            },
            function (ng2_toastr_1_1) {
                ng2_toastr_1 = ng2_toastr_1_1;
            },
            function (editschedule_component_1_1) {
                editschedule_component_1 = editschedule_component_1_1;
            },
            function (addtrain_component_1_1) {
                addtrain_component_1 = addtrain_component_1_1;
            },
            function (edittrain_component_1_1) {
                edittrain_component_1 = edittrain_component_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            platform_browser_1.BrowserModule,
                            app_routes_1.appRoutes,
                            http_1.HttpModule,
                            forms_1.FormsModule,
                            ng2_toastr_1.ToastModule.forRoot()
                        ],
                        declarations: [
                            app_component_1.AppComponent,
                            home_component_1.HomeComponent,
                            train_component_1.TrainComponent,
                            login_component_1.LoginComponent,
                            register_component_1.RegisterComponent,
                            alert_component_1.AlertComponent,
                            addschedule_component_1.AddScheduleComponent,
                            navbar_component_1.NavbarComponent,
                            address_component_1.AddressComponent,
                            addaddress_component_1.AddAddressComponent,
                            editaddress_component_1.EditAddressComponent,
                            editschedule_component_1.EditScheduleComponent,
                            addtrain_component_1.AddTrainComponent,
                            edittrain_component_1.EditTrainComponent,
                            profile_component_1.ProfileComponent
                        ],
                        providers: [
                            schedule_service_1.ScheduleService,
                            alert_service_1.AlertService,
                            auth_guard_1.AuthGurad,
                            authentication_service_1.AuthenticationService
                        ],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});

//# sourceMappingURL=app.module.js.map
