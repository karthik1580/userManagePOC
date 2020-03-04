import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Incident } from '../models/incident.model';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {
  constructor(private http: HttpClient){}

  createIncident(incident: Incident){
    return this.http.post<any>(environment.apiBaseUrl+'/incident', incident);
  }

  getAllInsident(){
    return this.http.get<any>(environment.apiBaseUrl+'/incident');
  }
    
}