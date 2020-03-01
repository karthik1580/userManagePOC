import { Component, OnInit } from '@angular/core';
import { UserRoleService } from '../../shared/user-role.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  registeredUser: any;
  constructor(private userRole: UserRoleService ) { }

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
     return this.userRole.getAllUsers().subscribe(
      res => {
        this.registeredUser = res;
      },
      err => {
        console.log('UserComponent err', err);
      })
  }

  userPermission(userId: any){
    console.log('userId', userId);
    debugger;
    //return this.userRole.updateUser(userId).subscribe(
    return this.userRole.updateUserById(userId).subscribe(
      res => {
        console.log("userId", res);
      },
      err => {
        console.log("err", err);
      }
    )
  }

}
