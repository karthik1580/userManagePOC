import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

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
  enableResetButton: boolean;
  selectedByEmailId: string;
  constructor(private http: HttpClient) { }

  saveUser(user: User): Observable<any>{
    return this.http.post<any>(environment.apiBaseUrl+'/register', user);
  }

  loginuser(user: User): Observable<any>{
    return this.http.post<any>(environment.apiBaseUrl+'/login', user)
  }

  loggedIn(){
    // !! -- double nikate
    return !!localStorage.getItem('token');
  }
  getAllRegUser(): Observable<any>{
    return this.http.get<any>(environment.apiBaseUrl+'/user');
  }
  getToken(){
    return localStorage.getItem('token');
  }

  getUserDetails(id: any): Observable<any>{
    return this.http.get<any>(environment.apiBaseUrl+'/login/'+ id);
  }
  getSelectedByEmail(reqObj: any){
    return this.http.get<any>(environment.apiBaseUrl+'/resetPass/'+ reqObj.email);
  }

  getUserSelectedById(data: User){
    return this.http.put<any>(environment.apiBaseUrl+'/resetPass/'+ data._id, data, httpOptions)
  }
  
}
