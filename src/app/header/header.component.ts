import { Component, OnInit, HostListener, ElementRef, Input } from '@angular/core';
import { fadeAnimation } from './fade.animation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [fadeAnimation]
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;
  brand = 'Ricardo Reais.';
  @Input() isLandingPage: boolean;

  @HostListener('document:click', ['$event'])
  clickout(event: { target: any }) {
    if (this.eRef.nativeElement.contains(event.target)) {
      // Clicked inside navbar, do nothing
    } else {
      // Clicked outside navbar, close it
      this.navbarOpen = false;
    }
  }

  constructor(private eRef: ElementRef) {}

  ngOnInit() {}

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
