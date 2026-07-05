import { Component, inject } from '@angular/core';
import { Router, RouterOutlet, NavigationStart } from '@angular/router';
import { AnimationEvent } from '@angular/animations';
import { slideInAnimation } from './slide-in.animation';
import { HeaderComponent } from './header/header.component';
import { environment } from 'src/environments/environment';
import { filter } from 'rxjs/operators';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, HeaderComponent],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  private router = inject(Router);

  title = 'fresh-portfolio';
  version = environment.appVersion;
  isLandingPage = true;
  animationOnGoing!: boolean;

  constructor() {
    this.router.events.pipe(filter((event) => event instanceof NavigationStart)).subscribe((event) => {
      this.isLandingPage = (event as NavigationStart).url === '/';
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  onAnimationEvent(_event: AnimationEvent) {
    this.animationOnGoing = true;
  }

  onAnimationEndEvent(_event: AnimationEvent) {
    this.animationOnGoing = false;
  }
}
