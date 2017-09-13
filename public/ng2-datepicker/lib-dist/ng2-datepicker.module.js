var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SlimScrollModule } from 'ng2-slimscroll';
import { DatePickerComponent } from './ng2-datepicker.component';
export { DatePickerOptions, DateModel } from './ng2-datepicker.component';
var DatePickerModule = (function () {
    function DatePickerModule() {
    }
    return DatePickerModule;
}());
DatePickerModule = __decorate([
    NgModule({
        declarations: [
            DatePickerComponent
        ],
        imports: [
            CommonModule,
            FormsModule,
            SlimScrollModule
        ],
        exports: [
            DatePickerComponent,
            SlimScrollModule,
            FormsModule
        ]
    })
], DatePickerModule);
export { DatePickerModule };
//# sourceMappingURL=ng2-datepicker.module.js.map