import { Component, OnInit } from '@angular/core';
import { UserRoleService } from '../../shared/user-role.service';
import { Incident } from '../../models/incident.model';
import { IncidentService } from '../../shared/incident.service'; 
import { UserService } from '../../shared/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  roleBasedUser : [];
  incidentList: Incident[] = [];
  isIncidentList: boolean = false;
  currentUser: any = {};
  constructor(private userRole: UserRoleService, private incidentService: IncidentService, private userservice:UserService ) { }

  ngOnInit() {
    this.retriveLocalStorageObj();
    this.getIncidentByIdData(this.currentUser);
  }

  getIncidentByIdData(data: any) {
    console.log('currentUser', this.currentUser);
    debugger;
    this.incidentService.getIncidentById(data._id).subscribe(
      res => { 
         this.incidentList = res;
        // this.isIncidentList = this.incidentList.length > 0 ? true : false;
      },
      err => { 
        console.log('err')
      }
    )
  }

  retriveLocalStorageObj() {
    var retrievedObject = localStorage.getItem('loggedInUser');
    this.currentUser = JSON.parse(retrievedObject);
  }
  

}
