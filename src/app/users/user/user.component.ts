import { Component, OnInit } from '@angular/core';
import { UserRoleService } from '../../shared/user-role.service';
import { UserService } from '../../shared/user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  roleBasedUser : [];
  constructor(private userRole: UserRoleService, private userservice:UserService ) { }

  ngOnInit() {
    //this.getUsers()
  }

  // getUsers() {
  //    return this.userRole.getAllUsers().subscribe(
  //     res => {
  //       console.log('UserComponent', res);
  //     },
  //     err => {
  //       console.log('UserComponent err', err);
  //     })
  // }
  

}
