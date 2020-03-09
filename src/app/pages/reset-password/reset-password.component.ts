import { Component, OnInit} from '@angular/core';
import { Validators, NgForm } from '@angular/forms';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetPassword: string = "support";
  selectedUser: Array<string> = [];
  constructor( private userservice: UserService, private _router: Router) { }

  ngOnInit() {
    
    console.log('this.userservice.selectedByEmailId', this.userservice.selectedByEmailId);
    //this.getSelectedUserDetails();
  }

  onSubmit(form: NgForm){
    
    if(form.value.oldPassword === this.resetPassword && form.value.newPassword === form.value.confirmPassword){

      form.value.email = this.userservice.selectedByEmailId;
      
      return this.userservice.getSelectedByEmail(form.value).subscribe(
        (res) => { 
          debugger;
          this.selectedUser = res
          this.updatePassword(res, form.value);
        },
        (err) => { console.log('Error in create incident', err); }
      );
    }
  }

  updatePassword(updatedRes, newValue){
    debugger;
    updatedRes.password = newValue.newPassword;

    return this.userservice.getUserSelectedById(updatedRes).subscribe(
      (res) => { 
        console.log('res', res);
      },
      (err) => { console.log('Error in create incident', err); }
    )
  }

}
  
