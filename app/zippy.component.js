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
    var ZippyComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ZippyComponent = (function () {
                function ZippyComponent() {
                    this.title = "This is a title";
                    this.isOpened = false;
                }
                ZippyComponent.prototype.onOpen = function () {
                    this.isOpened = !this.isOpened;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], ZippyComponent.prototype, "title", void 0);
                ZippyComponent = __decorate([
                    core_1.Component({
                        selector: 'zippy',
                        template: "\n        <div class=\"zippy\"> \n            <div class=\"zippy-title\" [class.highlight]=\"isOpened\" (click)=\"onOpen()\">\n                <strong>{{title}}</strong>\n                <i class=\"glyphicon pull-right\" [ngClass]=\"{\n                    'glyphicon-chevron-up': isOpened,\n                    'glyphicon-chevron-down': !isOpened\n                }\"></i>\n            </div>\n            <div class=\"zippy-content\" [hidden]=\"!isOpened\">\n                <ng-content></ng-content>\n            </div>\n        </div>\n    ",
                        styles: ["\n        .zippy {\n            border: 1px solid #E0E0E0;\n            border-radius: 4px;\n        }\n\n        .zippy-title {\n            height: 80px;\n            cursor: pointer;\n            line-height: 80px;\n            padding-left: 20px;\n        }\n\n        i {\n            margin-top: 30px;\n            margin-right: 20px;\n        }\n\n         .zippy-title:hover {\n            background-color: #F5F5F5;\n         }\n\n         .highlight {\n             background-color: #F5F5F5;\n         }\n\n        .zippy-content {\n            height: 80px;\n            line-height: 80px;\n            padding-left: 20px;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ZippyComponent);
                return ZippyComponent;
            }());
            exports_1("ZippyComponent", ZippyComponent);
        }
    }
});
//# sourceMappingURL=zippy.component.js.map