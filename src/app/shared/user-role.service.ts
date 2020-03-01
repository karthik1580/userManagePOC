import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { tpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user.model';

const httpOptions = {
  headers: new Headers({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {

  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get<any>(environment.apiBaseUrl+'/user');
  }

  updateUserById(data: User){
    let headers: new Headers({'Content-Type': 'application/json'})
    debugger;
    return this.http.put<any>(environment.apiBaseUrl+'/user/:id', data, httpOptions);
  }
}
