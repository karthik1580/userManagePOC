import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../../shared/incident.service';
import { NgForm } from '@angular/forms';
import { Incident } from '../../models/incident.model';
import { LoggedUserService } from 'src/app/shared/logged-user.service';
import { Router } from '@angular/router';

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
  currentLoggedUser: any = {};

  constructor(private _incidentService: IncidentService, private loggedUser: LoggedUserService, private _router: Router) { }

  ngOnInit() {  
    this.getLoggedUser();
    this.refreenceEmailid = this.currentLoggedUser.email;
  }

  onSubmit(form: NgForm){
    form.value.userMapId = this.currentLoggedUser._id
    this._incidentService.createIncident(form.value).subscribe(
      (res) => { 
        this.incidentList = res;
        if(this.currentLoggedUser.role === "Admin"){
          this._router.navigate(['/admin']);
        }else if(this.currentLoggedUser.role === "Pmo"){
          this._router.navigate(['/pmo']);
        }else if(this.currentLoggedUser.role === "User"){
          this._router.navigate(['/user']);
        }
       },
      (err) => {
        console.log('Error in create incident');
      }
    )
  }

  // retriveLocalStorageObj() {
  //   var retrievedObject = localStorage.getItem('loggedInUser');
  //   this.currentUser = JSON.parse(retrievedObject);
  // }

  getLoggedUser() {
    this.currentLoggedUser = this.loggedUser.getLoginData();
  }
  goBackToDashboard(){
    this._router.navigate(['/dashboard'])
  }
  

}
