System.register(["@angular/router", "./home/home.component", "./train/train.component", "./user/login.component", "./user/register.component", "./guards/auth.guard", "./home/addschedule.component", "./address/address.component", "./address/addaddress.component", "./address/editaddress.component", "./home/editschedule.component", "./train/addtrain.component", "./train/edittrain.component", "./user/profile.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, home_component_1, train_component_1, login_component_1, register_component_1, auth_guard_1, addschedule_component_1, address_component_1, addaddress_component_1, editaddress_component_1, editschedule_component_1, addtrain_component_1, edittrain_component_1, profile_component_1;
    var routing, appRoutes;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (train_component_1_1) {
                train_component_1 = train_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (register_component_1_1) {
                register_component_1 = register_component_1_1;
            },
            function (auth_guard_1_1) {
                auth_guard_1 = auth_guard_1_1;
            },
            function (addschedule_component_1_1) {
                addschedule_component_1 = addschedule_component_1_1;
            },
            function (address_component_1_1) {
                address_component_1 = address_component_1_1;
            },
            function (addaddress_component_1_1) {
                addaddress_component_1 = addaddress_component_1_1;
            },
            function (editaddress_component_1_1) {
                editaddress_component_1 = editaddress_component_1_1;
            },
            function (editschedule_component_1_1) {
                editschedule_component_1 = editschedule_component_1_1;
            },
            function (addtrain_component_1_1) {
                addtrain_component_1 = addtrain_component_1_1;
            },
            function (edittrain_component_1_1) {
                edittrain_component_1 = edittrain_component_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            }],
        execute: function() {
            routing = [
                { path: "", component: home_component_1.HomeComponent, canActivate: [auth_guard_1.AuthGurad] },
                { path: "trains", component: train_component_1.TrainComponent, canActivate: [auth_guard_1.AuthGurad] },
                { path: "trains/add", component: addtrain_component_1.AddTrainComponent, canActivate: [auth_guard_1.AuthGurad] },
                { path: "trains/:id", component: edittrain_component_1.EditTrainComponent, canActivate: [auth_guard_1.AuthGurad] },
                { path: "address", component: address_component_1.AddressComponent, canActivate: [auth_guard_1.AuthGurad] },
                { path: "address/add", component: addaddress_component_1.AddAddressComponent, canActivate: [auth_guard_1.AuthGurad] },
                { path: "address/:id", component: editaddress_component_1.EditAddressComponent, canActivate: [auth_guard_1.AuthGurad] },
                { path: "profile", component: profile_component_1.ProfileComponent, canActivate: [auth_guard_1.AuthGurad] },
                { path: "login", component: login_component_1.LoginComponent },
                { path: "register", component: register_component_1.RegisterComponent },
                { path: "schedule/add", component: addschedule_component_1.AddScheduleComponent, canActivate: [auth_guard_1.AuthGurad] },
                { path: "schedule/:id", component: editschedule_component_1.EditScheduleComponent, canActivate: [auth_guard_1.AuthGurad] },
                { path: '**', redirectTo: '' }
            ];
            exports_1("appRoutes", appRoutes = router_1.RouterModule.forRoot(routing));
        }
    }
});

//# sourceMappingURL=app.routes.js.map
