import { Component, OnInit } from '@angular/core';
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
  
  constructor( private userservice: UserService, private _router: Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm){
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

  closeErrorMsg() {
    setTimeout(() => this.showUnAuthError = false , 5000)
  }
}
