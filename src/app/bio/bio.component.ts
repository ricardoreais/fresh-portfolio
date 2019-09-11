import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../slide-in.animation';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss'],
  animations: [
    // trigger('flyInOut', [
    //   // state('in', style({ transform: 'translateX(0)' })),
    //   transition(':enter', [
    //     style({ transform: 'translateY(-100%)' }),
    //     animate(500)
    //   ]),
    //   // transition('* => void', [
    //   //   animate(2000, style({ transform: 'translateX(100%)' }))
    //   // ])
    // ])
  ]
})
export class BioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
