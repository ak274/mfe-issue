import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { APP_CONFIG, loadCommonEnvironment } from '@mfe-issue/environment';

import { AppModule } from './app/app.module';

Promise.all([loadCommonEnvironment()])
  .then(([environment]) => {
    platformBrowserDynamic([
      { provide: APP_CONFIG, useValue: environment },
    ]).bootstrapModule(AppModule);
  })
  .catch((error: unknown) => console.error(error));
