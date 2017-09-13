System.register(["@angular/core", "../service/train.service", "../service/alert.service", "@angular/router", 'ng2-toastr/ng2-toastr'], function(exports_1, context_1) {
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
    var core_1, train_service_1, alert_service_1, router_1, ng2_toastr_1;
    var AddTrainComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (train_service_1_1) {
                train_service_1 = train_service_1_1;
            },
            function (alert_service_1_1) {
                alert_service_1 = alert_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ng2_toastr_1_1) {
                ng2_toastr_1 = ng2_toastr_1_1;
            }],
        execute: function() {
            AddTrainComponent = (function () {
                function AddTrainComponent(trainService, router, alterService, toast, _elRef) {
                    this.trainService = trainService;
                    this.router = router;
                    this.alterService = alterService;
                    this.toast = toast;
                    this._elRef = _elRef;
                }
                AddTrainComponent.prototype.save = function (value) {
                    var _this = this;
                    var self = this;
                    this.trainService.AddTrain(value).subscribe(function (data) {
                        _this.alterService.success("Thêm mới tàu thành công!", true);
                        _this.router.navigate(['/trains']);
                    }, function (errors) {
                        var err = JSON.parse(errors._body);
                        if (err.name) {
                            _this.toast.error(err.name[0], "Oops!");
                            jQuery(self._elRef.nativeElement).find("#name").focus();
                        }
                    });
                };
                AddTrainComponent = __decorate([
                    core_1.Component({
                        selector: "addtrain-component",
                        templateUrl: "template/trains/addtrain.component.html",
                        providers: [train_service_1.TrainService]
                    }), 
                    __metadata('design:paramtypes', [train_service_1.TrainService, router_1.Router, alert_service_1.AlertService, ng2_toastr_1.ToastsManager, core_1.ElementRef])
                ], AddTrainComponent);
                return AddTrainComponent;
            }());
            exports_1("AddTrainComponent", AddTrainComponent);
        }
    }
});

//# sourceMappingURL=addtrain.component.js.map
