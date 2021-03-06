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
    var TrainService;
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
            TrainService = (function () {
                function TrainService(_http) {
                    this._http = _http;
                }
                TrainService.prototype.GetList = function () {
                    return this._http.get("/api/train", this.jwt()).map(function (responsive) { return responsive.json(); });
                };
                TrainService.prototype.GetListPerpage = function (page) {
                    return this._http.get("/api/train/page/" + page, this.jwt()).map(function (responsive) { return responsive.json(); });
                };
                TrainService.prototype.AddTrain = function (data) {
                    return this._http.post("/api/train/add", data, this.jwt()).map(function (response) { return response.json(); });
                };
                TrainService.prototype.GetDetailTrain = function (id) {
                    return this._http.get("/api/train/" + id, this.jwt()).map(function (response) { return response.json(); });
                };
                TrainService.prototype.UpdateTrain = function (id, data) {
                    return this._http.post("/api/train/" + id + "/update", data, this.jwt()).map(function (response) { return response.json(); });
                };
                TrainService.prototype.DeleteTrain = function (id) {
                    return this._http.get("/api/train/" + id + "/delete", this.jwt()).map(function (response) { return response.json(); });
                };
                TrainService.prototype.jwt = function () {
                    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
                    if (currentUser && currentUser.api_token) {
                        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + currentUser.api_token });
                        return new http_1.RequestOptions({ headers: headers });
                    }
                };
                TrainService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TrainService);
                return TrainService;
            }());
            exports_1("TrainService", TrainService);
        }
    }
});

//# sourceMappingURL=train.service.js.map
