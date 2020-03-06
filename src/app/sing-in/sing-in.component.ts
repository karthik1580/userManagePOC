import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

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
  @Output() isResetPassword = new EventEmitter();
  
  constructor( private userservice: UserService, private _router: Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm){
    if(form.value.password === "support"){
      this.userservice.selectedByEmailId = form.value.email;
      this._router.navigate(['/resetPwd']);
    }else{
        this.userservice.loginuser(form.value).subscribe(
          res => {
            localStorage.setItem('token', res.token);
            this._router.navigate(['/admin']);
          },
          err => {
            this.unauthorizedUser = err.error;
            this.showUnAuthError = true;
            this.closeErrorMsg();
          }
        )
    }
  }

  resetPassword(){
    this.isResetPassword.emit({pwdRequest: true});
  }

  closeErrorMsg() {
    setTimeout(() => this.showUnAuthError = false , 5000)
  }


}
