import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { User } from '../models/user.model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {

  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get<any>(environment.apiBaseUrl+'/admin');
  }

  updateUserById(data, enableDiasble){
    return this.http.put<any>(environment.apiBaseUrl+'/admin/'+ data._id, { isValid: enableDiasble }, httpOptions);
  }

  updateUserResetPwd(data){
    debugger;
    return this.http.put<any>(environment.apiBaseUrl+'/admin/'+ data._id, { password: null }, httpOptions);
  }
}
