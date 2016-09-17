import {Component} from 'angular2/core'
import {ZippyComponent} from './zippy.component'

@Component({
    selector: 'zippys',
    template: `
        <div class="container">
            <zippy *ngFor="#zippy of zippys" title={{zippy.title}}>
                {{zippy.body}}
            </zippy>
        </div>
    `,
    directives: [ZippyComponent]
})
export class ZippysComponent {
    zippys = [
        {
            title: "First Title",
            body: "First Body"
        },
        {
            title: "Second Title",
            body: "Second Body"
        }
    ]
}