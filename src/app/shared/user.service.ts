import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

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
  getToken(){
    return localStorage.getItem('token');
  }
  resetPassword(){
    this.enableResetButton = true;
  }
  // getSelectedUser(id: any){
  //   return this.http.get<any>(environment.apiBaseUrl+'/user/'+id);
  // }
  // // getSelectedEmail(emailId: any){
  // //   console.log('emailId', emailId);
  // //   return this.http.put<any>(environment.apiBaseUrl+'/resetPwd/'+emailId);
  // //   //return this.selectedByEmailId = emailId;
  // // }
  // getSelectedUserById(id: any){
  //   return this.http.get<any>(environment.apiBaseUrl+'/resetPwd/'+id)
  // }

  // resetNewPassword(formValue: User){
  //   let resetObj = {
  //     newPassword : formValue.newPassword,
  //     selectedEmail : this.selectedByEmailId
  //   }
  //   return this.http.put<any>(environment.apiBaseUrl+'/resetPwd', resetObj);
  // }

  getSelectedByEmail(reqObj: any){
    return this.http.get<any>(environment.apiBaseUrl+'/resetPass/'+ reqObj.email);
  }

  getUserSelectedById(data: User){
    debugger;
    console.log('data', data);
    return this.http.put<any>(environment.apiBaseUrl+'/resetPass/'+ data._id, data, httpOptions)
  }
  
}
