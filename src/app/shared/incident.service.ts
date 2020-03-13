import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Incident } from '../models/incident.model';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  constructor(private http: HttpClient){}

  createIncident(incident: Incident){
    return this.http.post<any>(environment.apiBaseUrl+'/incident', incident);
  }
  updateIncident(incident: Incident){
    return this.http.put<any>(environment.apiBaseUrl+'/incident', incident);
  }
  getAllInsident(){
    return this.http.get<any>(environment.apiBaseUrl+'/incident');
  }
  getCurrentUserInsident(){
    return this.http.get<any>(environment.apiBaseUrl+'/incident');
  }

  getIncidentById(id: any){
    return this.http.get<any>(environment.apiBaseUrl+'/incident/'+ id);
  }    
  getIncidentByMappedId(id: any){
    return this.http.get<any>(environment.apiBaseUrl+'/incident/'+ id);
  }    
  updateSelectedUserById(data: Incident){
    console.log('data', data);
    return this.http.put<any>(environment.apiBaseUrl+'/pmo/'+ data, data, httpOptions);
  } 
  
 
}