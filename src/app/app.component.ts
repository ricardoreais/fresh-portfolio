import { Component, inject } from '@angular/core';
import { RouterOutlet, NavigationStart, Router } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { environment } from 'src/environments/environment';
import { filter } from 'rxjs/operators';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterOutlet, HeaderComponent],
})
export class AppComponent {
  private router = inject(Router);

  title = 'fresh-portfolio';
  version = environment.appVersion;
  isLandingPage = true;

  constructor() {
    this.router.events.pipe(filter((event) => event instanceof NavigationStart)).subscribe((event) => {
      this.isLandingPage = (event as NavigationStart).url === '/';
    });
  }
}
