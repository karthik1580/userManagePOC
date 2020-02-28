import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { Toster } from 'src/app/models/toster.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: []
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  roles: Array<string> = [    
    'User',
    'Pmo',
    'Admin',
  ];

  emailPattern: any = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  errorMsg: any;

  tosermsg: Toster[] = [];
  showAlertMessage: boolean = false;
  constructor( private fb: FormBuilder, private userservice: UserService, private _router: Router) { }

  ngOnInit() {
    this.signUpForm = this.fb.group (
      {
        firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
        lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
        enterpriseId: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
        role: ['User'],
        email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
        password: ['', [Validators.required, Validators.minLength(2)]]
      }
    );     
  }

  closeToster(){
    setTimeout(()=>{
      this.showAlertMessage = false;
      this.tosermsg = [];
    },5000);
  }

  onSubmitSignupForm(form: FormGroup){
    this.userservice.saveUser(form.value).subscribe(
      (res) => {        
        //localStorage.setItem('token', res.token);
        this.showAlertMessage = true;
        this.tosermsg.push({title : "Success", message : "User created Successfully and waiting for Approval" });
        this.resetForm();
        this.closeToster();
        //setTimeout(() => this._router.navigate(['/dashboard']) ,5000)
        
      },
      (err) => {
        this.showAlertMessage = true;
        this.errorMsg = err.error.text;
        this.tosermsg.push({title : "Error", message : this.errorMsg });
        this.closeToster();
      }
    );
  }

  resetForm(){
    this.signUpForm = this.fb.group (
      {
        firstName: [''],
        lastName: [''],
        enterpriseId: [''],
        role: ['User'],
        email: [''],
        password: ['']
      }
    );
  }
}

