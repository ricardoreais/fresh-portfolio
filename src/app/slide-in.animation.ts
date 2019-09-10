import { trigger, transition, style, query, animateChild, animate, group, state } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  // Any routing towards Home route.
  transition('* => Home', [
    query(
      ':leave',
      style({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%'
      })
    ),
    query('#intro-video', [
      style({
        left: '-100%'
      })
    ]),
    group([
      query('#intro-video', [
        animate(
          '500ms ease-out',
          style({
            left: '0%'
          })
        )
      ]),
      query(
        ':leave',
        animate(
          '500ms ease-out',
          style({
            left: '100%'
          })
        )
      )
    ])
  ]),
  // Any routing from Home route.
  transition('Home => *', [
    query(
      ':leave',
      style({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%'
      })
    ),
    group([
      query('#intro-video', [
        animate(
          '500ms ease-out',
          style({
            left: '100%'
          })
        )
      ]),
      query(
        ':leave',
        animate(
          '500ms ease-out',
          style({
            left: '100%'
          })
        )
      )
    ])
  ]),
  transition('* <=> *', [
    state('in', style({})),
    // Set the initial style for both the entering and leaving elements.
    query(
      ':enter, :leave',
      [
        style({
          // color: 'red',
          position: 'fixed',
          top: 16,
          left: 0,
          width: '100%'
        })
      ],
      { optional: true }
    ),
    // New component entering the page.
    query(
      ':enter',
      [
        style({
          // color: 'blue',
          left: '-100%'
        })
      ],
      { optional: true }
    ),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(
        ':leave',
        [
          animate(
            '500ms ease-out',
            style({
              left: '100%'
            })
          )
        ],
        { optional: true }
      ),
      // query(
      //   '#intro-video',
      //   [
      //     animate(
      //       '500ms ease-out',
      //       style({
      //         left: '100%'
      //       })
      //     )
      //   ],
      //   { optional: true }
      // ),
      query(':enter', [animate('500ms ease-out', style({ left: '0%' }))], { optional: true })
    ]),
    query(':enter', animateChild(), { optional: true })
  ])
]);
