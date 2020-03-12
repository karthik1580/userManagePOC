import { Injectable,  } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoggedUserService {
  loggedInUser: any;  
  currentUser: any = {};
  constructor(private http: HttpClient) { }

  getLoginData(): Observable<any>{
    let retrievedObject = localStorage.getItem('loggedInUser');
    return this.currentUser = JSON.parse(retrievedObject);
  }
}
 
 