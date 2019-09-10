import { trigger, transition, style, query, animateChild, animate, group, state } from '@angular/animations';

export const slideInAnimation = trigger('routeAnimations', [
  // Any routing towards Home route.
  transition('* => Home', [
    // Find the leaving elements and set the style below.
    query(
      ':leave',
      style({
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%'
      }),
      { optional: true }
    ),
    // Find the entering components and put them on the left side.
    query(':enter, #intro-video', [
      style({
        position: 'fixed',
        top: 0,
        width: '100%',
        left: '-100%'
      })
    ]),
    // Find the entering background video and put it on the left side.
    // query('#intro-video', [
    //   style({
    //     left: '-100%'
    //   })
    // ]),
    group([
      // Move the entering components from the left (hidden) to the center of the page.
      query(':enter', [
        animate(
          '500ms ease-out',
          style({
            left: '0%'
          })
        )
      ]),
      // Move the video from the left (hidden) to the center of the page.
      query('#intro-video', [
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
            position: 'fixed',
            top: 0,
            left: '100%',
            width: '100%'
          })
        ),
        { optional: true }
      )
    ])
  ]),
  // Any routing from Home route.
  transition('Home => *', [
    // Find the leaving elements and set the style below.
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
      // Find the leaving background video and move it to the right side.
      query('#intro-video', [
        animate(
          '500ms ease-out',
          style({
            position: 'fixed',
            top: 0,
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
    // query(':leave', animateChild(), { optional: true }),
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
    ])
    // query(':enter', animateChild(), { optional: true })
  ])
]);
