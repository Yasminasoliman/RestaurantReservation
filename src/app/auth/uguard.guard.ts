import { inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

export const uauthGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.islogedin() && authService.role == 'customer') {
    return true;
  }

  // Redirect to the login page
  return router.parseUrl('/login');
};
