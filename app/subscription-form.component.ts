import {Component} from 'angular2/core'

@Component({
    selector: 'subscription-form',
    templateUrl: 'app/subscription-form.template.html'
})
export class SubscriptionFormComponent {
    log(x) {
        console.log(x);
    }

    onSubmit(f){
        console.log(f);
    }
}