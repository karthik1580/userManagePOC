import { Component, OnInit } from '@angular/core';
import { Incident } from '../../models/incident.model';
import { IncidentService } from '../../shared/incident.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-pmo',
  templateUrl: './pmo.component.html',
  styleUrls: ['./pmo.component.scss']
})
export class PmoComponent implements OnInit {
  incidentList: Incident[] = [];
  isIncidentList: boolean = false;

  constructor(private incidentService: IncidentService, private _router: Router) { 

  }

  ngOnInit() {
    this.getAllInsident();
  }

  getAllInsident() {
    this.incidentService.getAllInsident().subscribe(
      res => { 
        this.incidentList = res;
        this.isIncidentList = this.incidentList.length ? true : false;
      },
      err => { 
        console.log('err') 
      }
  )}

  onOpenItem() {}
  onProgressItem() {}
  onCloseItem() {}
  onResolvedItem() {}
  onRejectedItem() {}
  onClarificationRequired() {}
  onClarificationReceived() {}

}