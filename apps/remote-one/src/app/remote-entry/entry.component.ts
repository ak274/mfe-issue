import { Component } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'mfe-issue-remote-one-entry',
  template: `<mfe-issue-nx-welcome></mfe-issue-nx-welcome>`,
})
export class RemoteEntryComponent {
  constructor(private config: ConfigService) {
    this.config.getConfig();
  }
}
