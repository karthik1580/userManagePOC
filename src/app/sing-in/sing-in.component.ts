import { Component, OnInit } from '@angular/core';
import { Validators, NgForm } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {

  // model = {
  //   email: '',
  //   password: ''
  // }
  autnMemberLogin = {}
  emailPattern: any = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  
  constructor( private userservice: UserService, private _router: Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm){
    console.log('Form', form.value);
    this.userservice.loginuser(form.value).subscribe(
      res => {
        console.log('looin res', res)
        localStorage.setItem('token', res.token);
        //if(res.role === ''){}
        this._router.navigate(['/userdetail']);
      },
      err => console.log('looin err', err)
    )
  }
}
