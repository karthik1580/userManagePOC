import { Component, OnInit } from '@angular/core';
import { Incident } from '../../models/incident.model';
import { IncidentService } from '../../shared/incident.service'; 
import { Router } from '@angular/router';
import { NgForm, FormBuilder, FormArray } from '@angular/forms';
import * as _ from 'lodash';
import { LoggedUserService } from 'src/app/shared/logged-user.service';
//import { AgGridupdateButtonComponent } from '../../grids/ag-gridupdate-button.component'



@Component({
  selector: 'app-pmo',
  templateUrl: './pmo.component.html',
  styleUrls: ['./pmo.component.scss']
})
export class PmoComponent implements OnInit {
  incidentList: Incident[] = [];
  selectedIncident: Incident[] = [];
  myTicketsArray: Incident[] = [];
  incidentDetail: any = {};
  isIncidentList: boolean = false;
  showCustomModal: boolean = false;
  viewMyTickets: boolean = false;
  hideme: boolean = true;
  isSelectedBox: boolean = false;
  isOpenSelectbox: any;
  currentLoggedUser: any = {};
  // isSelectWorkstation: boolean = true;
  isSelectTicketStatus: string;
  radioSelected: any;
  workstations: Array<string> = [    
    'Not yet assign',
    'CDC2B.02.191',
    'CDC2B.02.192',
    'CDC2B.02.193',
    'CDC2B.02.194',
    'CDC2B.02.195',
    'CDC2B.02.196',
    'CDC2B.02.197',
    'CDC2B.02.198',
    'CDC2B.02.199',
    'CDC2B.02.200',
  ];

  ticketStatus: Array<string> = [    
    'Open',
    'Closed',
    'In Progress',
    'Clarification Required',
    'Clarification Received',
    'Resolved',
    'Rejected'
  ];
  
  constructor(
    private incidentService: IncidentService,
    private loggedUser: LoggedUserService,
    private _router: Router) {}

  ngOnInit() {
    this.getAllInsidentData();
  } 

  getAllInsidentData() {
    this.incidentService.getAllInsident().subscribe(
      res => {
        this.incidentList = res;
        this.isIncidentList = this.incidentList.length > 0 ? true : false;
        this.viewMyTickets = false;
      },
      err => { 
        console.log('err') 
      }
  )}

  getIncidentByIdData(id: any) {
    this.incidentService.updateIncident(id).subscribe(
      res => {
        this.selectedIncident = res;
      },
      err => console.log('err') 
    );
  }
  

  // onAssignWorkstation(selectedUser: any) {
  //   this.getIncidentByIdData(selectedUser._id); 
    
  //   if(this.selectedIncident && this.selectedIncident){
  //     this.onCloseItem()
  //   }
  // }
  getIncidentDetail(incidentDetail){    
    let detail = {
      email: incidentDetail.email,
      enterpriseId: incidentDetail.enterpriseId,
      firstName: incidentDetail.firstName,
      lastName: incidentDetail.lastName,
      status: incidentDetail.status,
      isOpen: incidentDetail.isOpen,
      isOpenStatus: incidentDetail.isOpenStatus,
      isResolved: incidentDetail.isResolved,
      isClarification: incidentDetail.isClarification,
      created_on: incidentDetail.created_on,
      title: incidentDetail.title,
      issueType: incidentDetail.issueType,
      description: incidentDetail.description      
    }    
    this.showCustomModal = true
    this.incidentDetail = detail;
  } 
  
  updateIncidentDetail(incident, workstation, ticketStatus, index){
    incident.status = ticketStatus;
    incident.workstation = workstation;
    incident.update_on = new Date();
    incident.isOpen = false;
    
    return this.incidentService.updateSelectedUserById(incident).subscribe(
      (res) => { 
        this.getAllInsidentData();  
      },
      (err) => { console.log('Error in create incident', err); }
    )

  }
  createIncident(){
    this._router.navigate(['/incident']);    
  }
  backToDashboard(){
    this._router.navigate(['/dashboard']);
    this.viewMyTickets = false;
  }

  onUpdateIncident(incident: any){

  }
  viewAllIncident() {
    this.getAllInsidentData();
    this.viewMyTickets = false;
  }

  // checkboxSelectionIncident(seletedIncident) {
  //   console.log('seletedIncident', seletedIncident);
  // }

  getMyIncidents() {
    debugger;
    this.incidentService.getIncidentById(this.loggedUser.currentUser._id).subscribe(
      res => { 
         this.incidentList = res;
         this.isIncidentList = this.incidentList.length > 0 ? true : false;
      },
      err => { 
        console.log('err')
      }
    )
  }
  
  

}