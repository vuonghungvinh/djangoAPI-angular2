System.register(["@angular/core", "../service/address.service"], function(exports_1, context_1) {
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
    var core_1, address_service_1;
    var AddressComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (address_service_1_1) {
                address_service_1 = address_service_1_1;
            }],
        execute: function() {
            AddressComponent = (function () {
                function AddressComponent(_addressService, _elRef) {
                    this._addressService = _addressService;
                    this._elRef = _elRef;
                    this.sumpage = 1;
                    this.currentpage = 1;
                }
                AddressComponent.prototype.ngOnInit = function () {
                    this.renderPage(this.currentpage);
                };
                AddressComponent.prototype.renderPage = function (page) {
                    var _this = this;
                    this._addressService.GetAddressPerpage(page).subscribe(function (data) {
                        if (data) {
                            _this.address = data['data'];
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
                AddressComponent.prototype.prev = function () {
                    if (this.currentpage > 1) {
                        this.currentpage--;
                        this.renderPage(this.currentpage);
                    }
                };
                AddressComponent.prototype.selectpage = function (page) {
                    if (this.currentpage != page) {
                        this.currentpage = page;
                        this.renderPage(this.currentpage);
                    }
                };
                AddressComponent.prototype.next = function () {
                    if (this.currentpage < this.sumpage) {
                        this.currentpage++;
                        this.renderPage(this.currentpage);
                    }
                };
                AddressComponent.prototype.deleteAddress = function (id) {
                    var _this = this;
                    this._addressService.DeleteAddress(id).subscribe(function (data) {
                        jQuery.alert('Xoá thành công!');
                        _this.renderPage(_this.currentpage);
                    }, function (errors) {
                        jQuery.alert('Xoá không thành công!');
                    });
                };
                AddressComponent.prototype.delete = function (id, name) {
                    var self = this;
                    jQuery.confirm({
                        title: 'Xác nhận!',
                        content: 'Bạn có muốn xoá ' + name + ' và các lịch trình của địa điểm này?',
                        buttons: {
                            confirm: {
                                btnClass: 'btn-danger',
                                text: "Xoá",
                                action: function () {
                                    self.deleteAddress(id);
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
                AddressComponent = __decorate([
                    core_1.Component({
                        selector: "address-component",
                        templateUrl: "template/address/address.component.html",
                        providers: [address_service_1.AddressService]
                    }), 
                    __metadata('design:paramtypes', [address_service_1.AddressService, core_1.ElementRef])
                ], AddressComponent);
                return AddressComponent;
            }());
            exports_1("AddressComponent", AddressComponent);
        }
    }
});

//# sourceMappingURL=address.component.js.map
