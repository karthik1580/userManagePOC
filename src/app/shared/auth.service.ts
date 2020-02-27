import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  saveUser(user: User){
    return this.http.post<any>(environment.apiBaseUrl+'/register', user);
  }

  loginuser(user: User){
    return this.http.post<any>(environment.apiBaseUrl+'/login', user)
  }
}
