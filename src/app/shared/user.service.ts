import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
selectedUser: User = {
  enterpriseId: '',
    firstName: '',
    lastName: '',
    role: '',
    email: '',
    password: ''
}
  constructor(private http: HttpClient) { }

  saveUser(user: User){
    return this.http.post<any>(environment.apiBaseUrl+'/register', user);
  }

  loginuser(user: User){
    return this.http.post<any>(environment.apiBaseUrl+'/login', user)
  }

  loggedIn(){
    // !! -- double nikate
    return !!localStorage.getItem('token');
  }
  getAllRegUser(){
    return this.http.get<any>(environment.apiBaseUrl+'/user');
  }
  
}
