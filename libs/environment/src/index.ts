import { InjectionToken } from '@angular/core';

export interface Config {
  appUrl: string;
}

export const APP_CONFIG: InjectionToken<Config> = new InjectionToken(
  'Application Config'
);

const getValue = (): Config => ({ appUrl: 'https:example.com' });

export async function loadCommonEnvironment(): Promise<Config> {
  const config = await getValue();
  return config;
}
