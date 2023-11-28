import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { map, take, tap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  inject(UserService).getLoggedInUser()
  return inject(UserService).loggedInUser$
    .pipe(
      map(user => !!user?._id || router.createUrlTree(['/signup']))
    )
}
