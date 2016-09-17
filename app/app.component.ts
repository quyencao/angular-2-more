import {Component} from 'angular2/core';
import {CourseComponent} from './course.component'
import {SummaryPipe} from './summary.pipe'
import {FavoriteComponent} from './favorite.component'
import {BootstrapPanelComponent} from './bootrap.panel.component'
import {ZippysComponent} from './zippys.component'

@Component({
    selector: 'my-app',
    template: `
        <div>
            <zippys></zippys>
        </div>
    `,
    directives: [CourseComponent, FavoriteComponent, BootstrapPanelComponent, ZippysComponent],
    pipes: [SummaryPipe]
})
export class AppComponent { 
    viewMode = 'map';

    task = {
        title: "Review",
        assignee: null,
        role: 'man'
    }

    courses = ['course1', 'course2', 'course3'];

    course = {
        title: "Angular 2 for Beginners",
        rating: 4.9745,
        students: 59242,
        price: 99.95,
        releaseDate: new Date(2016, 5,3) 
    }

    post = {
        title: 'Angular 2 for Beginners',
        content: `
            entore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iu
        ` 
    }
}

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


