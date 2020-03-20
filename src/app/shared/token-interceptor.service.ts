import { Injectable, Injector  } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { Observable, throwError  } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  currentLoggedUser: any = {};
  constructor( private injector: Injector, private _router: Router) { }

  intercept(req:HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{

    let authSerevice = this.injector.get(UserService)
    let tokenizereq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authSerevice.getToken()}`,
        'Content-Type': 'application/json'
      }
    });
    return next.handle(tokenizereq).pipe(catchError(this.errorHandler))
    }
    errorHandler(error: HttpErrorResponse) {   
       
      let authSerevice = this.injector.get(UserService);  
      localStorage.removeItem('token');
      localStorage.removeItem('loggedInUser');
      //localStorage.setItem('token', res.token);
      //this.currentLoggedUser = {};
      //this._router.navigate(['/signIn']);
      return throwError("server error");
    }
}
