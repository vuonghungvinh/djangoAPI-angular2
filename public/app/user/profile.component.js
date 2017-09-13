System.register(["@angular/core", "../service/authentication.service", "../service/user.service", 'ng2-toastr/ng2-toastr', "../service/alert.service"], function(exports_1, context_1) {
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
    var core_1, authentication_service_1, user_service_1, ng2_toastr_1, alert_service_1;
    var ProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (ng2_toastr_1_1) {
                ng2_toastr_1 = ng2_toastr_1_1;
            },
            function (alert_service_1_1) {
                alert_service_1 = alert_service_1_1;
            }],
        execute: function() {
            ProfileComponent = (function () {
                function ProfileComponent(authentication, userService, toast, alter, _elRef) {
                    this.authentication = authentication;
                    this.userService = userService;
                    this.toast = toast;
                    this.alter = alter;
                    this._elRef = _elRef;
                }
                ProfileComponent.prototype.ngOnInit = function () {
                    this.profile = this.authentication.getUser();
                    this.profile.password = '';
                };
                ProfileComponent.prototype.getFiles = function (file) {
                    this.image = file.target.files;
                };
                ProfileComponent.prototype.profileForm = function () {
                    var _this = this;
                    var self = this;
                    this.userService.UpdateProfile(this.profile, this.image).subscribe(function (data) {
                        _this.alter.success("Cập nhật thông tin thành công.", false);
                        if (data.data && data.data.api_token) {
                            localStorage.setItem('currentUser', JSON.stringify(data.data));
                        }
                        _this.profile = _this.authentication.getUser();
                        _this.profile.password = '';
                    }, function (errors) {
                        var err = JSON.parse(errors._body);
                        if (err.firstname) {
                            _this.toast.error(err.firstname[0], "Oops!");
                            jQuery(self._elRef.nativeElement).find("#firstname").focus();
                            return;
                        }
                        if (err.name) {
                            _this.toast.error(err.name[0], "Oops!");
                            jQuery(self._elRef.nativeElement).find("#name").focus();
                            return;
                        }
                        if (err.address) {
                            _this.toast.error(err.address[0], "Oops!");
                            jQuery(self._elRef.nativeElement).find("#address").focus();
                            return;
                        }
                        if (err.phone) {
                            _this.toast.error(err.phone[0], "Oops!");
                            jQuery(self._elRef.nativeElement).find("#phone").focus();
                            return;
                        }
                        if (err.password) {
                            _this.toast.error(err.password[0], "Oops!");
                            jQuery(self._elRef.nativeElement).find("#password").focus();
                            jQuery(self._elRef.nativeElement).find("#password").val('');
                            jQuery(self._elRef.nativeElement).find("#password-confirm").val('');
                            return;
                        }
                    });
                };
                ProfileComponent = __decorate([
                    core_1.Component({
                        selector: "profile-component",
                        templateUrl: "template/user/profile.component.html",
                        providers: [user_service_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, user_service_1.UserService, ng2_toastr_1.ToastsManager, alert_service_1.AlertService, core_1.ElementRef])
                ], ProfileComponent);
                return ProfileComponent;
            }());
            exports_1("ProfileComponent", ProfileComponent);
        }
    }
});

//# sourceMappingURL=profile.component.js.map
