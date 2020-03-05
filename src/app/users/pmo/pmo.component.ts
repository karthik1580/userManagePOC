import { Component, OnInit } from '@angular/core';
import { Incident } from '../../models/incident.model';
import { IncidentService } from '../../shared/incident.service'; 
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pmo',
  templateUrl: './pmo.component.html',
  styleUrls: ['./pmo.component.scss']
})
export class PmoComponent implements OnInit {
  incidentList: Incident[] = [];
  selectedIncident: Incident[] = [];
  isIncidentList: boolean = false;
  workstation: Array<string> = [    
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

  constructor(private incidentService: IncidentService, private _router: Router) { 

  }

  ngOnInit() {
    this.getAllInsidentData();
  }

  getAllInsidentData() {
    this.incidentService.getAllInsident().subscribe(
      res => { 
        this.incidentList = res;
        this.isIncidentList = this.incidentList.length > 0 ? true : false;
      },
      err => { 
        console.log('err') 
      }
  )}

  getIncidentByIdData(id: any) {
    this.incidentService.getIncidentById(id).subscribe(
      res => {
        this.selectedIncident = res;
        //this.onUpdateIncident(this.selectedIncident)
      },
      err => console.log('err') 
    );
  }

  onAssignWorkstation(selectedUser: any) {
    this.getIncidentByIdData(selectedUser._id); 
    
    if(this.selectedIncident && this.selectedIncident){
      this.onCloseItem()
    }
  }

  onUpdateIncident(){

  }

  onOpenItem() {}
  onProgressItem() {}
  onCloseItem() {}
  onResolvedItem() {}
  onRejectedItem() {}
  onClarificationRequired() {}
  onClarificationReceived() {}

}