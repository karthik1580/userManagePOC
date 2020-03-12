import { Component, OnInit } from '@angular/core';
import { LoggedUserService } from '../shared/logged-user.service';
import { UserService } from '../shared/user.service';
import { IncidentService } from '../shared/incident.service';
import { Router } from '@angular/router';
import { Incident } from '../models/incident.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentLoggedUser: any = {};
  incidentList: Incident[] = [];

  constructor(private user: UserService, private incidentService: IncidentService, private loggedUser: LoggedUserService, private _router: Router) { }

  ngOnInit() {
    this.getLoggedUser();
    this.getAllInsidentData();
  }

  getLoggedUser() {
    this.currentLoggedUser = this.loggedUser.getLoginData();
  }

  createIncident(){
    this._router.navigate(['/incident'])
  }

  getAllInsidentData() {
    this.incidentService.getAllInsident().subscribe(
      res => { 
        this.incidentList = res;
        debugger;
        //this.getClosedCount(this.incidentList);
        console.log('this.incidentList', this.incidentList);
      },
      err => { 
        console.log('err') 
      }
  )}
  
  // getClosedCount(incidents){
  //   for(let user of res){
  //     if(currentUser === user['_id']){
  //       continue;
  //     }
  //     this.registeredUser.push(user);
  //   }
  // }

  // getClosedCount(incidents){
  //   for(let count of incidents){
  //     if( this.currentLoggedUser === count['_id']){
  //       continue;
  //     }
  //     this.registeredUser.push(count);
  //   }
  // }


}
