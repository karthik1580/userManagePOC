import { Component, OnInit } from '@angular/core';
import { UserRoleService } from '../../shared/user-role.service';
import { UserService } from '../../shared/user.service';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  registeredUser: any = [];
  adminUsersList: boolean;
  isEnablebutton: boolean = true;
  isDiasablebutton: boolean = false;
  
  constructor(private userRole: UserRoleService, private _userService: UserService ,private _router: Router ) { }

  ngOnInit() {
    this.getUsers();

  }

  getUsers() {
     return this.userRole.getAllUsers().subscribe(
      res => {
        //this.registeredUser = res;
        this.getCurrentUser(res);
      },
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            console.log('401 auth error')
            this._router.navigate(['/signin'])
          }
        }
      })
  }

  getCurrentUser(res: any){
    this.registeredUser = [];
    let currentUser = "5e64ade2ed465612e8f8586b";
    for(let user of res){
      if(currentUser === user['_id']){
        continue;
      }
      this.registeredUser.push(user);
    }

    this.adminUsersList = this.registeredUser.length > 0 ? true : false;
  }

  userPermission(user: any, enableDiasble:boolean){    
    return this.userRole.updateUserById(user, enableDiasble).subscribe(
      res => {        
        this.getUsers();
      },
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            this._router.navigate(['/signin'])
          }
        }
      }
    )
  }

  resetPwdById(user){    
    return this.userRole.updateUserResetPwd(user).subscribe(
      res => {        
        this.getUsers();
      },
      err => {
        if(err instanceof HttpErrorResponse){
          if(err.status === 401){
            this._router.navigate(['/signin'])
          }
        }
      }
    )
  }

}
