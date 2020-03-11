import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../shared/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguarPmoGuard implements CanActivate {
  constructor(private _authService: UserService, private _router: Router) { }
  currentUser: any = {};
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    this.retriveLocalStorageObj(); 
    
    if(this._authService.loggedIn() && this.currentUser.role === 'Pmo' && route.url[0].path === 'pmo'){
      return true;       
    }else if(this._authService.loggedIn() && this.currentUser.role === 'Pmo'){
      this._router.navigate(['/pmo']);
      return false
    } else if(this._authService.loggedIn() && this.currentUser.role === 'Admin'){
      this._router.navigate(['/admin']);
      return false
    }else if(this._authService.loggedIn() && route.url[0].path !== 'user' || route.url[0].path !== ''){
      this._router.navigate(['/pmo']);
      return false
    }
  }
  retriveLocalStorageObj() {
    var retrievedObject = localStorage.getItem('loggedInUser');
    this.currentUser = JSON.parse(retrievedObject);
  }
}