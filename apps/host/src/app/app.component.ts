import { Component, Inject } from '@angular/core';
import { APP_CONFIG, Config } from '@mfe-issue/environment';

@Component({
  selector: 'mfe-issue-root',
  template: ` <ul class="remote-menu">
      <li><a routerLink="/">Home</a></li>

      <li><a routerLink="remote-one">RemoteOne</a></li>
      <li><a routerLink="remote-two">RemoteTwo</a></li>
    </ul>
    <router-outlet></router-outlet>`,
})
export class AppComponent {
  constructor(@Inject(APP_CONFIG) private config: Config) {
    console.log(config);
  }
}
