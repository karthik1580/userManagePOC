import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { LoggedUserService } from '../../shared/logged-user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentLoggedUser: any = {};
  ddLoginLogout: boolean = false;

  constructor(private user: UserService, private loggedUser: LoggedUserService, private router: Router) { }

  ngOnInit() {   
    this.getLoggedUser();
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
    this.currentLoggedUser = {};
  }
  headerDD(){
    //this.ddLoginLogout = !this.ddLoginLogout;
  }
  getLoggedUser() {
    this.currentLoggedUser = this.loggedUser.getLoginData();
  }

  // retriveLocalStorageObj() {
  //   var retrievedObject = localStorage.getItem('loggedInUser');
  //   this.currentUser = JSON.parse(retrievedObject);
  // }

  
}
