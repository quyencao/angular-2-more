System.register(['angular2/core', './course.component', './summary.pipe', './favorite.component', './bootrap.panel.component', './zippys.component'], function(exports_1, context_1) {
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
    var core_1, course_component_1, summary_pipe_1, favorite_component_1, bootrap_panel_component_1, zippys_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (course_component_1_1) {
                course_component_1 = course_component_1_1;
            },
            function (summary_pipe_1_1) {
                summary_pipe_1 = summary_pipe_1_1;
            },
            function (favorite_component_1_1) {
                favorite_component_1 = favorite_component_1_1;
            },
            function (bootrap_panel_component_1_1) {
                bootrap_panel_component_1 = bootrap_panel_component_1_1;
            },
            function (zippys_component_1_1) {
                zippys_component_1 = zippys_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.viewMode = 'map';
                    this.task = {
                        title: "Review",
                        assignee: null,
                        role: 'man'
                    };
                    this.courses = ['course1', 'course2', 'course3'];
                    this.course = {
                        title: "Angular 2 for Beginners",
                        rating: 4.9745,
                        students: 59242,
                        price: 99.95,
                        releaseDate: new Date(2016, 5, 3)
                    };
                    this.post = {
                        title: 'Angular 2 for Beginners',
                        content: "\n            entore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iu\n        "
                    };
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <div>\n            <zippys></zippys>\n        </div>\n    ",
                        directives: [course_component_1.CourseComponent, favorite_component_1.FavoriteComponent, bootrap_panel_component_1.BootstrapPanelComponent, zippys_component_1.ZippysComponent],
                        pipes: [summary_pipe_1.SummaryPipe]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
// <courses></courses>
//     <ul class="nav nav-pills">
//         <li [class.active]="viewMode == 'map'"><a (click)="viewMode = 'map'">Map View</a></li>
//         <li [class.active]="viewMode == 'list'"><a (click)="viewMode = 'list'">List View</a></li>
//     </ul>
//     <div [ngSwitch]="viewMode">
//         <template [ngSwitchWhen]="'map'" ngSwitchDefault>Map View Content</template>
//         <template [ngSwitchWhen]="'list'">List View Content</template>
//     <div>
//     <ul>
//         <li *ngFor="#course of courses, #i=index">
//             {{i + 1}} - {{course}}
//         </li>
//         <template ngFor [ngForOf]="courses" #course #i=index>  
//             <li>{{i + 1}} - {{course}}</li>
//         </template>
//     </ul>
//     <br>
//     {{course.title | uppercase | lowercase}}
//     <br>
//     {{course.rating | number:'2.2-2'}}
//     <br>
//     {{course.students | number}}
//     <br>
//     {{course.price | currency:'AUD':true:'2.2-2'}}
//     <br>
//     {{course.releaseDate | date:'MMM yyyy'}}
//     <br>
//     {{course | json}}
//     <br>
//     {{post.title}}
//     <br>
//     {{post.content | summary:20}}
//     <br>
//     <favorite></favorite>
//     <br>
//     <ul>
//         <li>Title: {{task.title}}</li>
//         <li>Assginee: {{task.assignee?.role?.name}}</li>
//     </ul>
//     <br>
//     <bs-panel>
//         <div class="heading">This is a panel heading</div>
//         <div class="body">This is a panel body</div>
//         <div class="body">This is a panel body</div>
//     </bs-panel>
//# sourceMappingURL=app.component.js.map