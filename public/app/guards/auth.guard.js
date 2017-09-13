System.register(["@angular/core", "@angular/router", "../service/alert.service"], function(exports_1, context_1) {
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
    var core_1, router_1, alert_service_1;
    var AuthGurad;
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
            }],
        execute: function() {
            AuthGurad = (function () {
                function AuthGurad(router, alertService) {
                    this.router = router;
                    this.alertService = alertService;
                }
                AuthGurad.prototype.canActivate = function (route, state) {
                    if (localStorage.getItem("currentUser")) {
                        return true;
                    }
                    this.alertService.error("Vui lòng đăng nhập.", true);
                    this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
                    return false;
                };
                AuthGurad = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [router_1.Router, alert_service_1.AlertService])
                ], AuthGurad);
                return AuthGurad;
            }());
            exports_1("AuthGurad", AuthGurad);
        }
    }
});

//# sourceMappingURL=auth.guard.js.map
