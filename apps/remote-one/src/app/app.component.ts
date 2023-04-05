import { Component, Inject } from '@angular/core';
import { APP_CONFIG, Config } from '@mfe-issue/environment';
@Component({
  selector: 'mfe-issue-root',
  template: `<mfe-issue-test-form></mfe-issue-test-form>
    <router-outlet></router-outlet>`,
})
export class AppComponent {
  constructor(@Inject(APP_CONFIG) private config: Config) {
    console.log('remote-one', config);
  }
}
