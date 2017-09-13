System.register(["@angular/core", "../service/user.service", '../service/alert.service', "@angular/router"], function(exports_1, context_1) {
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
    var core_1, user_service_1, alert_service_1, router_1;
    var RegisterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (alert_service_1_1) {
                alert_service_1 = alert_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            RegisterComponent = (function () {
                function RegisterComponent(userService, alertService, router) {
                    this.userService = userService;
                    this.alertService = alertService;
                    this.router = router;
                    this.errors = '';
                }
                RegisterComponent.prototype.CloseMessage = function () {
                    this.errors = null;
                };
                RegisterComponent.prototype.getFiles = function (event) {
                    this.image = event.target.files;
                };
                RegisterComponent.prototype.registerForm = function (value) {
                    var _this = this;
                    this.userService.Register(value, this.image).subscribe(function (data) {
                        _this.alertService.success("Đăng kí thành công.", true);
                        _this.router.navigate(['login']);
                    }, function (errors) {
                        var err = JSON.parse(errors._body);
                        var er = '';
                        if (err.password) {
                            er += err.password[0] || '';
                        }
                        if (err.email) {
                            if (er.length > 0) {
                                er += "<br>" + err.email[0] || '';
                            }
                            else {
                                er += err.email[0] || '';
                            }
                        }
                        _this.errors = er;
                    });
                };
                RegisterComponent = __decorate([
                    core_1.Component({
                        selector: "register-component",
                        templateUrl: "template/user/register.component.html",
                        providers: [user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [user_service_1.UserService, alert_service_1.AlertService, router_1.Router])
                ], RegisterComponent);
                return RegisterComponent;
            }());
            exports_1("RegisterComponent", RegisterComponent);
        }
    }
});

//# sourceMappingURL=register.component.js.map
