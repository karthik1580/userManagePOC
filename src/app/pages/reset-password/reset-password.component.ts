import { Component, OnInit} from '@angular/core';
import { Validators, NgForm } from '@angular/forms';
import { UserService } from '../../shared/user.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { Toster } from 'src/app/models/toster.model';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  
  resetPassword: string = "support";
  newPasswordValue: string = "";
  confirmPasswordValue: string = "";
  selectedUser: Array<string> = [];
  tosermsg: Toster[] = [];
  showAlertMessage: boolean = false;
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
          this.selectedUser = res
          this.updatePassword(res, form.value);
        },
        (err) => { console.log('Error in create incident', err); }
      );
    }
  }

  updatePassword(updatedRes, newValue){

    updatedRes.password = newValue.newPassword;
    return this.userservice.getUserSelectedById(updatedRes).subscribe(
      (res) => { 
        console.log('res', res);
        this.showAlertMessage = true;        
        this.tosermsg.push({title : "Success", message : "Password reset successfully" });
        this.resetForm();
      },
      (err) => { console.log('Error in create incident', err); }
    )
  }

   resetForm(){
     this.resetPassword = "";
     setTimeout(() => {
      this.showAlertMessage = false;
      this._router.navigate(['/signin']);
     },2000);
     
  //   this.newPasswordValue = ""
  //   this.confirmPasswordValue = ""
  }

}
  
