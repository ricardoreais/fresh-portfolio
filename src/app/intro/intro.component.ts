import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  imports: []
})
export class IntroComponent {
  title = 'Software engineer.';
}
