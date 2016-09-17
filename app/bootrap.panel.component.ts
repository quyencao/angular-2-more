import {Component} from 'angular2/core'

@Component({
    selector: 'bs-panel',
    template: `
        <div class="panel panel-primary">
            <div class="panel-heading">
                <ng-content select=".heading"></ng-content>
            </div>
            <div class="panel-body">
                <ng-content select=".body"></ng-content>
            </div>
        </div>
    `,
    styles: [`
        .panel-heading:hover {
            background-color: #ccc;
        }
    `]
})
export class BootstrapPanelComponent {

}