import { Route } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
  {
    path: 'remote-two',
    loadChildren: () =>
      import('remote-two/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'remote-one',
    loadChildren: () =>
      import('remote-one/Module').then((m) => m.RemoteEntryModule),
  },
];
