import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../shared/user.service';
import { Toster } from 'src/app/models/toster.model';

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
  parentModel: Array <any> = [{ prop1: '1st prop', prop2: '2nd prop' }];

  tosermsg: Toster[] = [];
  showAlertMessage: boolean = false;
  constructor( private fb: FormBuilder, private userservice: UserService) { }

  ngOnInit() {
    this.signUpForm = this.fb.group (
      {
        firstName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
        lastName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
        enterpriseId: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
        role: ['User'],
        email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
        password: ['', [Validators.required, Validators.minLength(5)]]
      }
    );
     
  }

  onSubmitSignupForm(form: FormGroup){
    this.userservice.saveUser(form.value).subscribe(
      (res) => {
        console.log("I am in submit");
        
        this.showAlertMessage = true;
        this.tosermsg.push({title : "Success", message : "Successfully user hasbeen created", showToser: this.showAlertMessage });
        
      },
      (err) => {
        console.log("byee", err);
      }
    );
  }
}

