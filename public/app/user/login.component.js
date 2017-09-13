System.register(["@angular/core", "@angular/router", "../service/alert.service", "../service/authentication.service"], function(exports_1, context_1) {
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
    var core_1, router_1, alert_service_1, authentication_service_1;
    var LoginComponent;
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
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(route, router, authenticate, alertService) {
                    this.route = route;
                    this.router = router;
                    this.authenticate = authenticate;
                    this.alertService = alertService;
                    this.model = {};
                }
                LoginComponent.prototype.ngOnInit = function () {
                    this.authenticate.logout();
                    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                };
                LoginComponent.prototype.login = function (value) {
                    var _this = this;
                    this.authenticate.login(value).subscribe(function (data) {
                        _this.alertService.success("Đăng nhập thành công.", true);
                        _this.router.navigate([_this.returnUrl]);
                    }, function (error) {
                        _this.alertService.error(error.json().status);
                    });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: "login-component",
                        templateUrl: "template/user/login.component.html"
                    }), 
                    __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, authentication_service_1.AuthenticationService, alert_service_1.AlertService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});

//# sourceMappingURL=login.component.js.map
