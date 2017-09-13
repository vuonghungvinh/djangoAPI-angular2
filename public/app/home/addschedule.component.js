System.register(["@angular/core", "../service/schedule.service", "../service/train.service", "../service/address.service", "../service/alert.service", "@angular/router", 'moment', 'ng2-toastr/ng2-toastr'], function(exports_1, context_1) {
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
    var core_1, schedule_service_1, train_service_1, address_service_1, alert_service_1, router_1, moment_1, ng2_toastr_1;
    var $, AddScheduleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (schedule_service_1_1) {
                schedule_service_1 = schedule_service_1_1;
            },
            function (train_service_1_1) {
                train_service_1 = train_service_1_1;
            },
            function (address_service_1_1) {
                address_service_1 = address_service_1_1;
            },
            function (alert_service_1_1) {
                alert_service_1 = alert_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (moment_1_1) {
                moment_1 = moment_1_1;
            },
            function (ng2_toastr_1_1) {
                ng2_toastr_1 = ng2_toastr_1_1;
            }],
        execute: function() {
            $ = jQuery;
            AddScheduleComponent = (function () {
                function AddScheduleComponent(scheduleService, trainService, _elRef, addressService, alertService, router, toast) {
                    this.scheduleService = scheduleService;
                    this.trainService = trainService;
                    this._elRef = _elRef;
                    this.addressService = addressService;
                    this.alertService = alertService;
                    this.router = router;
                    this.toast = toast;
                    this.from_datetime1 = '';
                    this.to_datetime1 = '';
                }
                AddScheduleComponent.prototype.datefromChanged = function (date) {
                    this.from_datetime1 = date;
                };
                AddScheduleComponent.prototype.datetoChanged = function (date) {
                    this.to_datetime1 = date;
                };
                AddScheduleComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.trainService.GetList().subscribe(function (data) {
                        _this.trains = data;
                    });
                    this.addressService.GetAddress().subscribe(function (data) {
                        _this.address = data;
                    });
                    var self = this;
                    jQuery(this._elRef.nativeElement).find("#from_datetime").datetimepicker({
                        format: "YYYY-MM-DD HH:mm:00",
                        showTodayButton: true,
                        minDate: moment_1.default("YYYY-MM-DD HH:mm:00")
                    }).on("dp.change", function (e) {
                        self.datefromChanged(e.date.format("YYYY-MM-DD HH:mm:00"));
                        jQuery(self._elRef.nativeElement).find("#to_datetime").data("DateTimePicker").minDate(e.date);
                    });
                    jQuery(this._elRef.nativeElement).find("#to_datetime").datetimepicker({
                        format: "YYYY-MM-DD HH:mm:00",
                        showTodayButton: true,
                        minDate: moment_1.default("YYYY-MM-DD HH:mm:00")
                    }).on("dp.change", function (e) {
                        self.datetoChanged(e.date.format("YYYY-MM-DD HH:mm:00"));
                    });
                };
                AddScheduleComponent.prototype.save = function (value) {
                    var _this = this;
                    var self = this;
                    this.scheduleService.AddSchedule(value).subscribe(function (data) {
                        _this.alertService.success("Thêm mới lịch trình thành công.", true);
                        _this.router.navigate(['/']);
                    }, function (errors) {
                        var err = JSON.parse(errors._body);
                        if (err.train_id) {
                            _this.toast.error(err.train_id[0], "Oops!");
                            jQuery(self._elRef.nativeElement).find("#train_id").focus();
                            return;
                        }
                        if (err.name) {
                            _this.toast.error(err.name[0], "Oops!");
                            jQuery(self._elRef.nativeElement).find("#name").focus();
                            return;
                        }
                        if (err.from_address) {
                            _this.toast.error(err.from_address[0], "Oops!");
                            jQuery(self._elRef.nativeElement).find("#from_address").focus();
                            return;
                        }
                        if (err.to_address) {
                            _this.toast.error(err.to_address[0], "Oops!");
                            jQuery(self._elRef.nativeElement).find("#to_address").focus();
                            return;
                        }
                        if (err.from_datetime) {
                            _this.toast.error(err.from_datetime[0], "Oops!");
                            jQuery(self._elRef.nativeElement).find("#from_datetime").focus();
                            return;
                        }
                        if (err.to_datetime) {
                            _this.toast.error(err.to_datetime[0], "Oops!");
                            jQuery(self._elRef.nativeElement).find("#to_datetime").focus();
                            return;
                        }
                        if (err.distance) {
                            _this.toast.error(err.distance[0], "Oops!");
                            jQuery(self._elRef.nativeElement).find("#distance").focus();
                            return;
                        }
                        if (err.wagon_train) {
                            _this.toast.error(err.wagon_train[0], "Oops!");
                            jQuery(self._elRef.nativeElement).find("#wagon_train").focus();
                            return;
                        }
                        if (err.note) {
                            _this.toast.error(err.note[0], "Oops!");
                            jQuery(self._elRef.nativeElement).find("#note").focus();
                            return;
                        }
                        if (err.error) {
                            _this.toast.error(err.error[0], "Oops!");
                        }
                    });
                };
                AddScheduleComponent = __decorate([
                    core_1.Component({
                        selector: "add-schedule-component",
                        templateUrl: 'template/homepage/addschedule.component.html',
                        providers: [train_service_1.TrainService, address_service_1.AddressService]
                    }), 
                    __metadata('design:paramtypes', [schedule_service_1.ScheduleService, train_service_1.TrainService, core_1.ElementRef, address_service_1.AddressService, alert_service_1.AlertService, router_1.Router, ng2_toastr_1.ToastsManager])
                ], AddScheduleComponent);
                return AddScheduleComponent;
            }());
            exports_1("AddScheduleComponent", AddScheduleComponent);
        }
    }
});

//# sourceMappingURL=addschedule.component.js.map
