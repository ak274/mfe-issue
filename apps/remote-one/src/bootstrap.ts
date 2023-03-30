import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { APP_CONFIG, loadCommonEnvironment } from '@mfe-issue/environment';

Promise.all([loadCommonEnvironment()])
  .then(([environment]) => {
    platformBrowserDynamic([
      { provide: APP_CONFIG, useValue: environment },
    ]).bootstrapModule(AppModule);
  })
  .catch((error: unknown) => console.error(error));
