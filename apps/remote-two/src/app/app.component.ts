import { Component, Inject } from '@angular/core';
import { APP_CONFIG, Config } from '@mfe-issue/environment';

@Component({
  selector: 'mfe-issue-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  constructor(@Inject(APP_CONFIG) private config: Config) {
    console.log('remote-two', config);
  }
}
