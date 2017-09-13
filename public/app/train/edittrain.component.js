System.register(["@angular/core", "@angular/router", "../service/alert.service", "../service/train.service", 'ng2-toastr/ng2-toastr'], function(exports_1, context_1) {
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
    var core_1, router_1, alert_service_1, train_service_1, ng2_toastr_1;
    var EditTrainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (alert_service_1_1) {
                alert_service_1 = alert_service_1_1;
            },
            function (train_service_1_1) {
                train_service_1 = train_service_1_1;
            },
            function (ng2_toastr_1_1) {
                ng2_toastr_1 = ng2_toastr_1_1;
            }],
        execute: function() {
            EditTrainComponent = (function () {
                function EditTrainComponent(router, activatedRouter, alertService, toast, trainService, _elRef) {
                    this.router = router;
                    this.activatedRouter = activatedRouter;
                    this.alertService = alertService;
                    this.toast = toast;
                    this.trainService = trainService;
                    this._elRef = _elRef;
                }
                EditTrainComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.subscription = this.activatedRouter.params.subscribe(function (params) {
                        _this._id = params['id'];
                    });
                    this.trainService.GetDetailTrain(this._id).subscribe(function (data) {
                        _this.train = data;
                    });
                };
                EditTrainComponent.prototype.update = function () {
                    var _this = this;
                    var self = this;
                    this.trainService.UpdateTrain(this.train.id, this.train).subscribe(function (data) {
                        _this.alertService.success("Cập nhật tàu thành công.", true);
                        _this.router.navigate(['/trains']);
                    }, function (errors) {
                        var err = JSON.parse(errors._body);
                        if (err.name) {
                            _this.toast.error(err.name[0], "Oops!");
                            jQuery(self._elRef.nativeElement).find("#name").focus();
                        }
                    });
                };
                EditTrainComponent.prototype.ngOnDestroy = function () {
                    this.subscription.unsubscribe();
                };
                EditTrainComponent = __decorate([
                    core_1.Component({
                        selector: "edittrain-component",
                        templateUrl: "template/trains/edittrain.component.html",
                        providers: [train_service_1.TrainService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, alert_service_1.AlertService, ng2_toastr_1.ToastsManager, train_service_1.TrainService, core_1.ElementRef])
                ], EditTrainComponent);
                return EditTrainComponent;
            }());
            exports_1("EditTrainComponent", EditTrainComponent);
        }
    }
});

//# sourceMappingURL=edittrain.component.js.map
