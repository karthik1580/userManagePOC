import { Component, OnInit } from '@angular/core';
import { LoggedUserService } from '../shared/logged-user.service';
import { UserService } from '../shared/user.service';
import { IncidentService } from '../shared/incident.service';
import { Router } from '@angular/router';
import { Incident } from '../models/incident.model';
import { Status } from "../models/ststus.model";
import * as _ from 'lodash';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentLoggedUser: any = {};
  incidentList: Array<string> = [];

  openCountArray: Array<string> = [];
  closedCountArray: Array<string> = [];
  inprogressCountArray: Array<string> = [];
  clarificationRequiredCountArray: Array<string> = [];
  clarificationReceivedCountArray: Array<string> = [];
  resolvedCountArray: Array<string> = [];
  rejectedCountArray: Array<string> = [];

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
    if(this.currentLoggedUser.role === "User"){
      
      // this.incidentService.getIncidentById(data._id).subscribe(
      //   res => { 
      //      this.incidentList = res;
      //      this.isIncidentList = this.incidentList.length > 0 ? true : false;
      //   },
      //   err => { 
      //     console.log('err')
      //   }
      // )

      // this.incidentService.getIncidentById().subscribe(
      //   res => { 
      //     this.incidentList = res;
      //     this.getTicketCount(res);
      //   },
      //   err => { 
      //     console.log('err') 
      //   }
      // )
    }else if(this.currentLoggedUser.role === "Pmo"){
      this.incidentService.getAllInsident().subscribe(
        res => { 
          this.incidentList = res;
          this.getTicketCount(res);
        },
        err => { 
          console.log('err') 
        }
      )
    }
    
}

  viewAllIncident(){
    if(this.currentLoggedUser.role === "User"){
      this._router.navigate(['/user'])
    }else if(this.currentLoggedUser.role === "Pmo"){
        this._router.navigate(['/pmo'])
    }
  }
  
  
  getTicketCount(incidents){    

    let openTickets = _.filter(incidents, ['status', 'Open']);
    this.openCountArray.push(openTickets);
    
    let closedTickets = _.filter(incidents, ['status', 'Closed']);
    this.closedCountArray.push(closedTickets);

    let inProgressTickets = _.filter(incidents, ['status', 'In Progress']);
    this.inprogressCountArray.push(inProgressTickets);  

    let clarificationRequiredTickets = _.filter(incidents, ['status', 'Clarification Required']);
    this.clarificationRequiredCountArray.push(clarificationRequiredTickets);

    let clarificationReceivedTickets = _.filter(incidents, ['status', 'Clarification Received']);
    this.clarificationReceivedCountArray.push(clarificationReceivedTickets);
    
    let resolvedTickets = _.filter(incidents, ['status', 'Rejected']);
    this.resolvedCountArray.push(resolvedTickets);

    let rejectedTickets = _.filter(incidents, ['status', 'Rejected']);
    this.rejectedCountArray.push(rejectedTickets);

  }

  


}
