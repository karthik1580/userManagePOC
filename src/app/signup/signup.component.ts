import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { Toster } from 'src/app/models/toster.model';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  roles: Array<string> = [    
    'Admin',
    'Pmo',
    'User'
  ];

  emailPattern: any = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  errorMsg: any;
  tosermsg: Toster[] = [];
  showAlertMessage: boolean = false;
  adminCountError: boolean = false;
  registeredUser: any;
  isVaidUser: boolean;

  constructor( private fb: FormBuilder, private userservice: UserService, private _router: Router) { }
  ngOnInit() {
    //this.getAllRegistedUser();

    this.signUpForm = this.fb.group (
      {
        firstName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
        lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
        enterpriseId: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
        role: ['Admin'],
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
  // getAllRegistedUser(form){
  //   debugger;
  //   this.userservice.getAllRegUser().subscribe(
  //     res => {
  //       this.registeredUser = res;  
  //       debugger;      
  //       this.isVaidUser = this.registeredUser.length == 0 ? true : false;
  //       this.saveFormData(form);
  //     },
  //     err => {}
  //   );
  // }

  roleSelectionChanges(event: any){
    this.roleSelection();
  }
  roleSelection(){
    let registerAdmin = [];
    if(this.signUpForm.value.role === "Admin"){

      for (let i = 0; i < this.registeredUser; i++) {
        if(this.registeredUser.role == "Admin")
          registerAdmin.push(this.registeredUser[i]);
          if(registerAdmin.length > 3){
              this.adminCountError = true;
              return false;
          }
      }
    }
  }

  onSubmitSignupForm(form: FormGroup){
    
    //this.getAllRegistedUser(form);

    this.userservice.getAllRegUser().subscribe(
      res => {
        this.registeredUser = res;        
        
        this.saveFormData(form);
      },
      err => {}
    );
    
    //form.value.isVaidUser = this.registeredUser.length == 0 ? true : false;
  
    if(this.signUpForm.value.role === "Admin"){
      this.roleSelection();
    }

    form.value.isVaidUser = this.isVaidUser;
    

    
  }

  saveFormData(form){    
    this.isVaidUser = this.registeredUser.length == 0 ? true : false;
    form.value.isVaidUser = this.isVaidUser;
    form.value.status = 'open';
    this.userservice.saveUser(form.value).subscribe(
      (res) => {        
        //localStorage.setItem('token', res.token);
        this.showAlertMessage = true;
        this.tosermsg.push({title : "Success", message : "User created Successfully and waiting for Approval" });
        this.resetForm();
        this.closeToster();
        //setTimeout(() => this._router.navigate(['/signin']) ,4000)
        
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
        role: ['Admin'],
        email: [''],
        password: ['']
      }
    );
  }
}



