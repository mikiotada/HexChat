import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
} from '@angular/router';

import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { tap, map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  canActivate(next, state): Observable<boolean> {
    return this.authService.user$.pipe(
      take(1),
      map(user => !!user), // <-- map to boolean
      tap(loggedIn => {
        if (!loggedIn) {
          console.log('access denied');
          this.router.navigate(['/']);
        }
      })
    );
  }
}
