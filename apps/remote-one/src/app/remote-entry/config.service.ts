import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG, Config } from '@mfe-issue/environment';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  constructor(@Inject(APP_CONFIG) private config: Config) {}
  getConfig() {
    console.log('remote-one', this.config);
  }
}
