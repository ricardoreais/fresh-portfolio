import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  phoneNumber = '+351 926 065 224';
  email = 'ricardodtreais@gmail.com';

  constructor() {}

  ngOnInit() {}
}
