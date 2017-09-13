System.register(['@angular/core', "../service/schedule.service"], function(exports_1, context_1) {
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
    var core_1, schedule_service_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (schedule_service_1_1) {
                schedule_service_1 = schedule_service_1_1;
            }],
        execute: function() {
            HomeComponent = (function () {
                function HomeComponent(scheduleservice) {
                    this.scheduleservice = scheduleservice;
                    this.sumpage = 1;
                    this.currentpage = 1;
                }
                HomeComponent.prototype.ngOnInit = function () {
                    this.renderPage(this.currentpage);
                };
                HomeComponent.prototype.renderPage = function (page) {
                    var _this = this;
                    this.scheduleservice.GetSchedulePerPage(page).subscribe(function (data) {
                        if (data) {
                            _this.schedules = data['data'];
                            _this.currentpage = data['currentpage'];
                            _this.sumpage = data['sumpage'];
                            var items = [];
                            for (var i = 1; i <= _this.sumpage; i++) {
                                items.push(i);
                            }
                            _this.sumpage_arr = items;
                        }
                    });
                };
                HomeComponent.prototype.prev = function () {
                    if (this.currentpage > 1) {
                        this.currentpage--;
                        this.renderPage(this.currentpage);
                    }
                };
                HomeComponent.prototype.selectpage = function (page) {
                    if (this.currentpage != page) {
                        this.currentpage = page;
                        this.renderPage(this.currentpage);
                    }
                };
                HomeComponent.prototype.next = function () {
                    if (this.currentpage < this.sumpage) {
                        this.currentpage++;
                        this.renderPage(this.currentpage);
                    }
                };
                HomeComponent.prototype.deleteSchedule = function (id) {
                    var _this = this;
                    this.scheduleservice.DeleteSchedule(id).subscribe(function (data) {
                        jQuery.alert('Xoá thành công!');
                        _this.renderPage(_this.currentpage);
                    }, function (error) {
                        jQuery.alert('Xoá không thành công!');
                    });
                };
                HomeComponent.prototype.delete = function (id, name) {
                    var self = this;
                    jQuery.confirm({
                        title: 'Xác nhận!',
                        content: 'Bạn có muốn xoá ' + name + '?',
                        buttons: {
                            confirm: {
                                btnClass: 'btn-danger',
                                text: "Xoá",
                                action: function () {
                                    self.deleteSchedule(id);
                                }
                            },
                            cancel: {
                                text: "Hủy bỏ",
                                btnClass: 'btn-green',
                                action: function () {
                                }
                            }
                        }
                    });
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: "home-component",
                        templateUrl: "template/homepage/home.component.html",
                    }), 
                    __metadata('design:paramtypes', [schedule_service_1.ScheduleService])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});

//# sourceMappingURL=home.component.js.map
