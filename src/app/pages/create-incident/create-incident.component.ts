import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../../shared/incident.service';
import { NgForm } from '@angular/forms';
import { Incident } from '../../models/incident.model';
import { LoggedUserService } from 'src/app/shared/logged-user.service';

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
  refreenceEmailid: string; //Admin


  constructor(private _incidentService: IncidentService, private loggedUser: LoggedUserService) { }

  ngOnInit() {
    console.log('loggedUser', this.loggedUser);
    this.refreenceEmailid = this.loggedUser.loggedInUser.email;
  }

  onSubmit(form: NgForm){
    
    this._incidentService.createIncident(form.value).subscribe(
      (res) => { 
        this.incidentList = res;
       },
      (err) => {
        console.log('Error in create incident');
      }
    )
  }
  

}
