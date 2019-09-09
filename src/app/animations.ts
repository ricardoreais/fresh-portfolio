import { trigger, transition, style, query, animateChild, animate, group, state } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'fixed' }),
    state('in', style({})),
    // Set the initial style for both the entering and leaving elements.
    query(':enter, :leave', [
      style({
        color: 'red',
        position: 'fixed',
        // top: 0,
        // left: 0,
        // width: '100%'
      })
    ]),
    // New component entering the page.
    query(':enter', [
      style({
        color: 'blue',
        left: '-100%'
      })
    ]),
    query(':leave', animateChild()),
    group([
      query(':leave', [
        animate(
          '2000ms ease-out',
          style({
            left: '100%'
          })
        )
      ]),
      query(
        '#intro-video',
        [
          animate(
            '2000ms ease-out',
            style({
              left: '100%'
            })
          )
        ],
        { optional: true }
      ),
      query(':enter', [animate('2000ms ease-out', style({ left: '0%' }))])
    ]),
    query(':enter', animateChild())
  ])
  // transition('* <=> *', [
  //   style({ position: 'relative' }),
  //   query(':enter, :leave', [
  //     style({
  //       position: 'absolute',
  //       top: 0,
  //       left: 0,
  //       width: '100%'
  //     })
  //   ]),
  //   query(':enter', [style({ left: '-100%' })]),
  //   query(':leave', animateChild()),
  //   group([query(':leave', [animate('200ms ease-out', style({ left: '100%' }))]), query(':enter', [animate('300ms ease-out', style({ left: '0%' }))])]),
  //   query(':enter', animateChild())
  // ])
]);
