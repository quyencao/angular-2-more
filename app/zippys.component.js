System.register(['angular2/core', './zippy.component'], function(exports_1, context_1) {
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
    var core_1, zippy_component_1;
    var ZippysComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (zippy_component_1_1) {
                zippy_component_1 = zippy_component_1_1;
            }],
        execute: function() {
            ZippysComponent = (function () {
                function ZippysComponent() {
                    this.zippys = [
                        {
                            title: "First Title",
                            body: "First Body"
                        },
                        {
                            title: "Second Title",
                            body: "Second Body"
                        }
                    ];
                }
                ZippysComponent = __decorate([
                    core_1.Component({
                        selector: 'zippys',
                        template: "\n        <div class=\"container\">\n            <zippy *ngFor=\"#zippy of zippys\" title={{zippy.title}}>\n                {{zippy.body}}\n            </zippy>\n        </div>\n    ",
                        directives: [zippy_component_1.ZippyComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ZippysComponent);
                return ZippysComponent;
            }());
            exports_1("ZippysComponent", ZippysComponent);
        }
    }
});
//# sourceMappingURL=zippys.component.js.map