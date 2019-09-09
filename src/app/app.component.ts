import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router, NavigationStart, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs/operators';
import { slideInAnimation } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
    // animation triggers go here
  ]
})
export class AppComponent {
  title = 'fresh-portfolio';
  version = environment.appVersion;
  isLandingPage = true;

  constructor(private router: Router) {
    this.router.events.pipe(filter((event: any) => event instanceof NavigationStart)).subscribe((event: NavigationStart) => {
      this.isLandingPage = event.url === '/';
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  onAnimationEvent(event: AnimationEvent) {
    // openClose is trigger name in this example
    console.log(event);
  }
}
