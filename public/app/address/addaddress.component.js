System.register(["@angular/core", "../service/address.service", "../service/alert.service", "@angular/router"], function(exports_1, context_1) {
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
    var core_1, address_service_1, alert_service_1, router_1;
    var AddAddressComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (address_service_1_1) {
                address_service_1 = address_service_1_1;
            },
            function (alert_service_1_1) {
                alert_service_1 = alert_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AddAddressComponent = (function () {
                function AddAddressComponent(_addressService, allterService, router) {
                    this._addressService = _addressService;
                    this.allterService = allterService;
                    this.router = router;
                }
                AddAddressComponent.prototype.save = function (value) {
                    var _this = this;
                    this._addressService.AddAddress(value).subscribe(function (data) {
                        _this.allterService.success("Thêm địa điểm thành công", true);
                        _this.router.navigate(['address']);
                    }, function (errors) {
                        var err = JSON.parse(errors._body);
                        _this.allterService.error(err.name[0], true);
                    });
                };
                AddAddressComponent = __decorate([
                    core_1.Component({
                        selector: "addaddress-component",
                        templateUrl: "template/address/addaddress.component.html",
                        providers: [address_service_1.AddressService]
                    }), 
                    __metadata('design:paramtypes', [address_service_1.AddressService, alert_service_1.AlertService, router_1.Router])
                ], AddAddressComponent);
                return AddAddressComponent;
            }());
            exports_1("AddAddressComponent", AddAddressComponent);
        }
    }
});

//# sourceMappingURL=addaddress.component.js.map
