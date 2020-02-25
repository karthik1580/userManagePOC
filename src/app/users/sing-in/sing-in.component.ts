import { Component, OnInit } from '@angular/core';
import { Validators, NgForm } from '@angular/forms';

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
  
  constructor() { }

  ngOnInit() {
  }
  onSubmit(form: NgForm){
    console.log('Form', form.value)
  }
}
