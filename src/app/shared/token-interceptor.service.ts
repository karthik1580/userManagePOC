import { Injectable, Injector  } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { UserService } from '../shared/user.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor( private injector: Injector) { }

  intercept(req, next){
    let authSerevice = this.injector.get(UserService)
    let tokenizereq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authSerevice.getToken()}`
      }
    });
    return next.handle(tokenizereq);
  }
}
