import {Component, Input} from 'angular2/core'

@Component({
    selector: 'zippy',
    template: `
        <div class="zippy"> 
            <div class="zippy-title" [class.highlight]="isOpened" (click)="onOpen()">
                <strong>{{title}}</strong>
                <i class="glyphicon pull-right" [ngClass]="{
                    'glyphicon-chevron-up': isOpened,
                    'glyphicon-chevron-down': !isOpened
                }"></i>
            </div>
            <div class="zippy-content" [hidden]="!isOpened">
                <ng-content></ng-content>
            </div>
        </div>
    `,
    styles: [`
        .zippy {
            border: 1px solid #E0E0E0;
            border-radius: 4px;
        }

        .zippy-title {
            height: 80px;
            cursor: pointer;
            line-height: 80px;
            padding-left: 20px;
        }

        i {
            margin-top: 30px;
            margin-right: 20px;
        }

         .zippy-title:hover {
            background-color: #F5F5F5;
         }

         .highlight {
             background-color: #F5F5F5;
         }

        .zippy-content {
            height: 80px;
            line-height: 80px;
            padding-left: 20px;
        }
    `]
})
export class ZippyComponent {
    @Input() title = "This is a title";

    isOpened = false;

    onOpen() {
        this.isOpened = !this.isOpened;
    }
}