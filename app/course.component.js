System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var CourseComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CourseComponent = (function () {
                function CourseComponent() {
                    this.courses = ['course'];
                }
                CourseComponent = __decorate([
                    core_1.Component({
                        selector: 'courses',
                        template: "\n        <h1>Angular2 App</h1>\n        <div [hidden]=\"courses.length == 0\">\n            <h1>List of Course Here</h1>\n        </div>\n        <div [hidden]=\"courses.length > 0\">\n            <h1>You don't have any course yet.</h1>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], CourseComponent);
                return CourseComponent;
            }());
            exports_1("CourseComponent", CourseComponent);
        }
    }
});
// *ngIf="courses.length == 0"
// *ngIf="courses.length > 0" 
//# sourceMappingURL=course.component.js.map