import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../../shared/incident.service';
import { NgForm } from '@angular/forms';
import { Incident } from '../../models/incident.model';

@Component({
  selector: 'app-create-incident',
  templateUrl: './create-incident.component.html',
  styleUrls: ['./create-incident.component.scss']
})
export class CreateIncidentComponent implements OnInit {
  
  incedentType: Array<string> = [
    'Mouse issue',
    'Keyboard issue',
    'System issue',
    'Change Workstation',
    'Headset',
    'Decommission'
  ];
  incidentList: Array<string> = [];

  constructor(private http: IncidentService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm){
    this.http.createIncident(form.value).subscribe(
      (res) => { 
        this.incidentList = res;
       },
      (err) => {}
    )
  }
  

}
