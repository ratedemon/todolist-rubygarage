import { trigger,state,style,transition,animate,keyframes, query, stagger } from '@angular/animations';

// export const myAnim = trigger('myAnim', [
//       transition('* => *', [

//         query(':enter', style({ opacity: 0 }), {optional: true}),

//         query(':enter', stagger('300ms', [
//           animate('1s ease-in', keyframes([
//             style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
//             style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
//             style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
//           ]))]), {optional: true})
//       ])
//     ])

export const myAnim = trigger('myAnim', [
    state('*', style({transform: 'translateX(0)'})),
    transition(':enter', [
      style({transform: 'translateX(-100%)'}),
      animate(500)
    ]),
    transition(':leave', [
      animate(500, style({transform: 'translateX(100%)'}))
    ])
  ]);

export const formAnim = trigger('formAnim',[
  state('*', style({transform: 'translateX(0)'})),
    transition(':enter', [
      style({transform: 'translateY(-100%)'}),
      animate(500)
    ]),
    transition(':leave', [
      animate(500, style({transform: 'translateY(100%)'}))
    ])
])