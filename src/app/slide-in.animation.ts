import { trigger, transition, style, query, animateChild, animate, group, state } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  // Any routing towards Home route.
  transition('* => Home', [
    // Find the leaving elements and set the style below.
    query(
      ':leave',
      style({
        position: 'fixed',
        left: 0,
        width: '100%'
      }),
      { optional: true }
    ),
    // Find the entering components and background video and put them on the left side.
    query(':enter, #intro-video', [
      style({
        position: 'fixed',
        width: '100%',
        left: '-100%'
      })
    ]),
    group([
      // Move the entering components and video from the left (hidden) to the center of the page.
      query(':enter, #intro-video', [
        animate(
          '500ms ease-out',
          style({
            left: '0%'
          })
        )
      ]),
      // Find the components leaving the page and move them to the right side of the page.
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
    // Find the entering elements and place them on the left side.
    query(
      ':enter',
      style({
        position: 'fixed',
        left: '-100%',
        width: '100%'
      })
    ),
    // Find the leaving elements and set the style below.
    query(
      ':leave',
      style({
        position: 'fixed',
        left: 0,
        width: '100%'
      })
    ),
    group([
      // Find the leaving background video and move it to the right side.
      query('#intro-video', [
        animate(
          '500ms ease-out',
          style({
            position: 'fixed',
            left: '100%'
          })
        )
      ]),
      // Find the components leaving the page and move them to the right side of the page.
      query(
        ':leave',
        animate(
          '500ms ease-out',
          style({
            left: '100%'
          })
        )
      ),
      // Find the components entering the page and move them to the center of the page.
      query(
        ':enter',
        animate(
          '500ms ease-out',
          style({
            left: '0'
          })
        )
      )
    ])
  ]),
  transition('* <=> *', [
    // Set the initial style for both the entering and leaving elements.
    query(
      ':enter, :leave, #sticky-footer',
      [
        style({
          position: 'fixed',
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
          position: 'fixed',
          left: '-100%'
        })
      ],
      { optional: true }
    ),
    group([
      query(
        ':leave, #sticky-footer',
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
      query(':enter', [animate('500ms ease-out', style({ left: '0%' }))], { optional: true })
    ])
  ])
]);
