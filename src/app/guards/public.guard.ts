import { CanActivateFn } from '@angular/router';

export const INTRO_KEY = 'intro-seen';

export const publicGuard: CanActivateFn = (route, state) => {
  return true;
};
