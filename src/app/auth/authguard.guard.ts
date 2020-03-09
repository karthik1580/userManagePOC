import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../shared/user.service';

//https://stackoverflow.com/questions/36277506/prevent-routing-in-angular-when-user-manually-changes-url-in-browser-tab

// class Permissions {
//   canGoToRoute(user: UserToken, id: string): boolean {
//     return true;
//   }
// }

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {
  constructor(private _authService: UserService, private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this._authService.loggedIn()){
      return true;
    }else {
      this._router.navigate(['/signin'], { queryParams: { returnUrl: state.url }});
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