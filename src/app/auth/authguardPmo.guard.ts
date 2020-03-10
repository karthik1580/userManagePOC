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
    }else if(route.url[0].path !== 'pmo') {
      this._router.navigate(['/pmo']);
      return false;
    }
  }
  retriveLocalStorageObj() {
    var retrievedObject = localStorage.getItem('loggedInUser');
    this.currentUser = JSON.parse(retrievedObject);
  }
}