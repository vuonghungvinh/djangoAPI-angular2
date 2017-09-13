System.register(["@angular/core", "@angular/router", "../service/address.service", "../service/alert.service"], function(exports_1, context_1) {
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
    var core_1, router_1, address_service_1, alert_service_1;
    var EditAddressComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (address_service_1_1) {
                address_service_1 = address_service_1_1;
            },
            function (alert_service_1_1) {
                alert_service_1 = alert_service_1_1;
            }],
        execute: function() {
            EditAddressComponent = (function () {
                function EditAddressComponent(router, activatedRouter, addressService, alterService) {
                    this.router = router;
                    this.activatedRouter = activatedRouter;
                    this.addressService = addressService;
                    this.alterService = alterService;
                }
                EditAddressComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.subcription = this.activatedRouter.params.subscribe(function (params) {
                        _this._id = params['id'];
                    });
                    this.addressService.GetDetailAddress(this._id).subscribe(function (data) {
                        if (data.length > 0) {
                            _this.address = data[0];
                        }
                        else {
                            _this.address = null;
                        }
                    });
                };
                EditAddressComponent.prototype.update = function () {
                    var _this = this;
                    this.addressService.UpdateAddress(this.address, this.address.id).subscribe(function (data) {
                        _this.alterService.success("Cập nhật địa điểm thành công.", true);
                        _this.router.navigate(['/address']);
                    }, function (errors) {
                        var err = JSON.parse(errors._body);
                        _this.alterService.error(err.name[0], true);
                    });
                };
                EditAddressComponent.prototype.ngOnDestroy = function () {
                    this.subcription.unsubscribe();
                };
                EditAddressComponent = __decorate([
                    core_1.Component({
                        selector: "editaddress-component",
                        templateUrl: "template/address/editaddress.component.html",
                        providers: [address_service_1.AddressService]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, address_service_1.AddressService, alert_service_1.AlertService])
                ], EditAddressComponent);
                return EditAddressComponent;
            }());
            exports_1("EditAddressComponent", EditAddressComponent);
        }
    }
});

//# sourceMappingURL=editaddress.component.js.map
