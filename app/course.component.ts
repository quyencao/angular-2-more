import {Component} from 'angular2/core'

@Component({
    selector: 'courses',
    template: `
        <h1>Angular2 App</h1>
        <div [hidden]="courses.length == 0">
            <h1>List of Course Here</h1>
        </div>
        <div [hidden]="courses.length > 0">
            <h1>You don't have any course yet.</h1>
        </div>
    `
})
export class CourseComponent {
    courses = ['course'];
}

// *ngIf="courses.length == 0"
// *ngIf="courses.length > 0"