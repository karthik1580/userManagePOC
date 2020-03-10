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
export class AuthguardUserGuard implements CanActivate {
  constructor(private _authService: UserService, private _router: Router) { }
  currentUser: any = {};
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.retriveLocalStorageObj();
   
    if(this._authService.loggedIn() && this.currentUser.role === 'User' && route.url[0].path === 'user'){
      return true;       
    }else if(this._authService.loggedIn() && this.currentUser.role === 'Admin'){
      this._router.navigate(['/admin']);
      return false
    }else if(this._authService.loggedIn() && this.currentUser.role === 'Pmo'){
      this._router.navigate(['/pmo']);
      return false
    }else if(this._authService.loggedIn() && route.url[0].path !== 'user' || route.url[0].path !== ''){
      this._router.navigate(['/user']);
      return false
    }
  }
  retriveLocalStorageObj() {
    var retrievedObject = localStorage.getItem('loggedInUser');
    this.currentUser = JSON.parse(retrievedObject);
  }
}