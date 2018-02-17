import {trigger, state, style, transition, animate, keyframes, query, stagger} from '@angular/animations';

export const myAnim = trigger('myAnim', [
    state('*', style({transform: 'translateX(0)', opacity: 1})),
    transition(':enter', [
        style({transform: 'translateX(-50%)', opacity: 0}),
        animate(500)
    ]),
    transition(':leave', [
        animate(500, style({transform: 'translateX(50%)', opacity: 0}))
    ])
]);

export const formAnim = trigger('formAnim', [
    state('*', style({transform: 'translateX(0)', opacity: 1})),
    transition(':enter', [
        style({transform: 'translateY(20%)', opacity: 0}),
        animate(300)
    ]),
    transition(':leave', [
        animate(300, style({transform: 'translateY(20%)', opacity: 0}))
    ])
]);