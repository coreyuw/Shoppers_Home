import { UserService } from './user.service';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '../../node_modules/@angular/router';
import { map } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private auth: AuthService, private userService: UserService) { }

  canActivate(): Observable<boolean> {
    return this.auth.appUser$.pipe(
      map(appUser => appUser.isAdmin)
    );
  }
}
