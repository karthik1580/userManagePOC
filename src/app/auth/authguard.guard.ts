import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private _router: Router, private _authService: UserService) { }

  canActivate(): boolean {
    if(this._authService.loggedIn()){
      return true;
    }else {
      this._router.navigate(['/signin']);
      return false;
    }
  }
}


/*
if (this._authService.loggedIn()) {
      console.log('true')
      return true
    } else {
      console.log('false')            
      this._router.navigate(['/login'])
      return false
    }
*/