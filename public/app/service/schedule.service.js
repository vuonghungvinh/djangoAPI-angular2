System.register(["@angular/core", "@angular/http", "rxjs/add/operator/map"], function(exports_1, context_1) {
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
    var core_1, http_1;
    var ScheduleService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            ScheduleService = (function () {
                function ScheduleService(_http) {
                    this._http = _http;
                }
                ScheduleService.prototype.GetList = function () {
                    return this._http.get("/api/schedule", this.jwt()).map(function (responsive) { return responsive.json(); });
                };
                ScheduleService.prototype.GetSchedulePerPage = function (page) {
                    return this._http.get("/api/schedule/page/" + page, this.jwt()).map(function (response) { return response.json(); });
                };
                ScheduleService.prototype.AddSchedule = function (data) {
                    return this._http.post("/api/schedule/add", data, this.jwt()).map(function (responsive) { return responsive.json(); });
                };
                ScheduleService.prototype.DeleteSchedule = function (id) {
                    return this._http.get("/api/schedule/" + id + "/delete", this.jwt()).map(function (responsive) { return responsive.json(); });
                };
                ScheduleService.prototype.GetDetailSchedule = function (id) {
                    return this._http.get("/api/schedule/" + id, this.jwt()).map(function (response) { return response.json(); });
                };
                ScheduleService.prototype.UpdateSchedule = function (id, data) {
                    return this._http.post("/api/schedule/" + id + "/update", data, this.jwt()).map(function (response) { return response.json(); });
                };
                ScheduleService.prototype.jwt = function () {
                    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
                    if (currentUser && currentUser.api_token) {
                        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + currentUser.api_token });
                        return new http_1.RequestOptions({ headers: headers });
                    }
                };
                ScheduleService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ScheduleService);
                return ScheduleService;
            }());
            exports_1("ScheduleService", ScheduleService);
        }
    }
});

//# sourceMappingURL=schedule.service.js.map
