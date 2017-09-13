System.register(["@angular/core", "../service/train.service"], function(exports_1, context_1) {
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
    var core_1, train_service_1;
    var TrainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (train_service_1_1) {
                train_service_1 = train_service_1_1;
            }],
        execute: function() {
            TrainComponent = (function () {
                function TrainComponent(trainservice) {
                    this.trainservice = trainservice;
                    this.sumpage = 1;
                    this.currentpage = 1;
                }
                TrainComponent.prototype.ngOnInit = function () {
                    this.renderPage(this.currentpage);
                };
                TrainComponent.prototype.renderPage = function (page) {
                    var _this = this;
                    this.trainservice.GetListPerpage(page).subscribe(function (data) {
                        if (data) {
                            _this.trains = data['data'];
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
                TrainComponent.prototype.prev = function () {
                    if (this.currentpage > 1) {
                        this.currentpage--;
                        this.renderPage(this.currentpage);
                    }
                };
                TrainComponent.prototype.selectpage = function (page) {
                    if (this.currentpage != page) {
                        this.currentpage = page;
                        this.renderPage(this.currentpage);
                    }
                };
                TrainComponent.prototype.next = function () {
                    if (this.currentpage < this.sumpage) {
                        this.currentpage++;
                        this.renderPage(this.currentpage);
                    }
                };
                TrainComponent.prototype.deleteTrain = function (id) {
                    var _this = this;
                    this.trainservice.DeleteTrain(id).subscribe(function (data) {
                        jQuery.alert('Xoá thành công!');
                        _this.renderPage(_this.currentpage);
                    }, function (errors) {
                        jQuery.alert('Xoá không thành công!');
                    });
                };
                TrainComponent.prototype.delete = function (id, name) {
                    var self = this;
                    jQuery.confirm({
                        title: 'Xác nhận!',
                        content: 'Bạn có muốn xoá ' + name + ' và các lịch trình của tàu này?',
                        buttons: {
                            confirm: {
                                btnClass: 'btn-danger',
                                text: "Xoá",
                                action: function () {
                                    self.deleteTrain(id);
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
                TrainComponent = __decorate([
                    core_1.Component({
                        selector: "train-component",
                        templateUrl: "template/trains/train.component.html",
                        providers: [train_service_1.TrainService]
                    }), 
                    __metadata('design:paramtypes', [train_service_1.TrainService])
                ], TrainComponent);
                return TrainComponent;
            }());
            exports_1("TrainComponent", TrainComponent);
        }
    }
});

//# sourceMappingURL=train.component.js.map
