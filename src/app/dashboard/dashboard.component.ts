import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LoggedUserService } from '../shared/logged-user.service';
import { UserService } from '../shared/user.service';
import { IncidentService } from '../shared/incident.service';
import { Router } from '@angular/router';
import { Incident } from '../models/incident.model';
import { Status } from "../models/ststus.model";
import * as _ from 'lodash';
import * as c3 from 'c3';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit  {
  currentLoggedUser: any = {};
  incidentList: Array<string> = [];

  dashboardList: any = {};
  openCountArray: Array<string> = [];
  closedCountArray: Array<string> = [];
  inprogressCountArray: Array<string> = [];
  clarificationRequiredCountArray: Array<string> = [];
  clarificationReceivedCountArray: Array<string> = [];
  resolvedCountArray: Array<string> = [];
  rejectedCountArray: Array<string> = [];

  constructor(private user: UserService, private incidentService: IncidentService, private loggedUser: LoggedUserService, private _router: Router) { }

  ngOnInit() {
    this.incidentList = [];
    this.getLoggedUser();
    this.getAllInsidentData();
  }
  ngAfterViewInit() {}

  getLoggedUser() {
    this.currentLoggedUser = this.loggedUser.getLoginData();
  }

  createIncident(){
    this._router.navigate(['/incident'])
  }

  getAllInsidentData() {
    if(this.currentLoggedUser != null){

      if(this.currentLoggedUser.role === "User"){
        this.incidentService.getIncidentById(this.currentLoggedUser._id).subscribe(
          res => { 
            this.incidentList = res;
            this.getTicketCount(res);
          },
          err => { 
            console.log('err')
          }
        )
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
    }else{
      this._router.navigate(['/signin'])
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
    this.displayIncident()
  }

  displayIncident(){
    this.dashboardList = {
        open: this.openCountArray[0].length,
        closed: this.closedCountArray[0].length,
        inprogress: this.inprogressCountArray[0].length,
        clafRequired: this.clarificationRequiredCountArray[0].length,
        clafRecived: this.clarificationReceivedCountArray[0].length,
        resolved: this.resolvedCountArray[0].length,
        rejected: this.rejectedCountArray[0].length
    } 
    this.onloadPieChart(this.dashboardList)
  }
  
  onloadPieChart(dashboardList){
    let openValue = dashboardList.open;
    let inprogress = (dashboardList.inprogress + dashboardList.clafRequired);
    let closed = dashboardList.closed;
    let rejected = dashboardList.rejected;
    
    let chart = c3.generate({
    bindto: '#chart',
        data: {
            columns: [
              ['In-Progress', inprogress],
              ['Rejected Issue', rejected],
              ['Closed Issues', closed],
              ['Open Issues', openValue],
            ],
            type : 'pie'
           
        }
    });
  }


}
