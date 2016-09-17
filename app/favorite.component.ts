import {Component} from 'angular2/core'

@Component({
    selector: 'favorite',
    template: `
        <i 
            class="glyphicon"
            (click)="isFavorite = !isFavorite"
            [ngClass]="{
                'glyphicon-star': isFavorite,
                'glyphicon-star-empty': !isFavorite
            }"
            [ngStyle]="{
                'color': isFavorite ? 'deeppink' : 'orange',
                'font-size': isFavorite ? '50px' : '30px'
            }"
        ></i>
    `,
    styles: [`
        .glyphicon {
            font-size: 30px;
        }
    `]
})
export class FavoriteComponent {
    isFavorite = true;
}