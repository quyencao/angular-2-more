import {Component} from 'angular2/core';
import {ContactFormComponent} from './contact-form.component'
import {SubscriptionFormComponent} from './subscription-form.component'

@Component({
    selector: 'my-app',
    template: `
        <div class="container" [ngStyle]="{'margin-top': '40px'}">
            <contact-form></contact-form>
        </div>
        <div class="container" [ngStyle]="{'margin-top': '40px'}">
            <subscription-form></subscription-form>
        </div>      
    `,
    directives: [ContactFormComponent, SubscriptionFormComponent],
})
export class AppComponent { 
   
}

