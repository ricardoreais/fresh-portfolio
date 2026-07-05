import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  imports: []
})
export class ContactComponent {
  phoneNumber = '+351 926 065 224';
  email = 'ricardodtreais@gmail.com';
}
