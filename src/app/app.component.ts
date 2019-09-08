import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fresh-portfolio';
  version = environment.appVersion;
  isLandingPage = true;

  constructor(private router: Router) {
    this.router.events
    .pipe(
      filter((event: any) => event instanceof NavigationStart)
    )
    .subscribe((event: NavigationStart) => {
      this.isLandingPage = event.url === '/';
    });
  }
}
