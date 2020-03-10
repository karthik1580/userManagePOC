import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { Router, ActivatedRoute  } from '@angular/router';
import { LoggedUserService } from '../shared/logged-user.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss'],
  providers: []
})
export class SingInComponent implements OnInit {
  autnMemberLogin = {}
  emailPattern: any = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  unauthorizedUser: string;
  showUnAuthError: boolean = false;
  //@Output() isResetPassword = new EventEmitter();
  returnUrl: string;
  
  constructor( 
    private userservice: UserService, 
    private loggedUser: LoggedUserService, 
    private _router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    //this.userservice.;
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  onSubmit(form: NgForm){
    if(form.value.password === "support"){
      this.userservice.selectedByEmailId = form.value.email;
      this._router.navigate(['/resetPwd']);
    }else{
        this.userservice.loginuser(form.value).subscribe(
          res => {
            localStorage.setItem('token', res.token);
            this.getSelectedUser(form.value);
            
          },
          err => {
            this.unauthorizedUser = err.error;
            this.showUnAuthError = true;
            this.closeErrorMsg();
          }
        )
    }
  }

  // resetPassword(){
  //   this.isResetPassword.emit({pwdRequest: true});
  // }

  closeErrorMsg() {
    setTimeout(() => this.showUnAuthError = false , 5000)
  }
  getSelectedUser(formValue){
    this.userservice.getUserDetails(formValue.email).subscribe(
       res => {
            this.loggedUser.loggedInUser = res;

            let resObj: any = {
              _id: res._id,
              enterpriseId: res.enterpriseId,
              firstName: res.firstName,
              lastName: res.lastName,
              role: res.role,
              email: res.email
            }

            localStorage.setItem('loggedInUser', JSON.stringify(resObj));
            if(res.role === "Admin"){
              this._router.navigate(['/admin']);
            }else if(res.role === "Pmo"){
              this._router.navigate(['/pmo']);
            }else if(res.role === "User"){
              this._router.navigate(['/user']);
            }           
            
          },
          err => {
            this.unauthorizedUser = err.error;
            this.showUnAuthError = true;
            this.closeErrorMsg();
          }
    );

    
  }

}
