import { Component, OnInit, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  navbarOpen = false;
  brand = 'Ricardo Reais.';

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
