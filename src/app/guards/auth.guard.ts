import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { map, take, tap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)

  return inject(UserService).loggedInUser$.pipe(
    tap(user=> console.log(user)
    ),
    map(user => !!user.name || router.createUrlTree(['/signup']))
  )
};
