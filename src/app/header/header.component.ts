import { Component, HostListener, ElementRef, Input, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { fadeAnimation } from './fade.animation';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [RouterLink, RouterLinkActive],
  animations: [fadeAnimation]
})
export class HeaderComponent {
  private eRef = inject(ElementRef);

  navbarOpen = false;
  brand = 'Ricardo Reais.';
  @Input() isLandingPage!: boolean;
  @Input() animationOnGoing!: boolean;

  @HostListener('document:click', ['$event'])
  clickout(event: { target: EventTarget | null }) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.navbarOpen = false;
    }
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
