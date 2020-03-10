import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: any = {};

  constructor(private user: UserService, private router: Router,) { }

  ngOnInit() {
    if(this.currentUser.role === 'Admin')
      this.router.navigateByUrl('/admin');

    if(this.currentUser.role === 'Pmo')
      this.router.navigateByUrl('/pmo');
      
    if(this.currentUser.role === 'User')
      this.router.navigateByUrl('/user');
  }
  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('loggedInUser');
  }

  retriveLocalStorageObj() {
    var retrievedObject = localStorage.getItem('loggedInUser');
    this.currentUser = JSON.parse(retrievedObject);
  }
}
