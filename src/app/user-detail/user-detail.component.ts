import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  test: any;
  constructor() { }

  ngOnInit() {
    
    this.test = localStorage.getItem('token');
    console.log('test', this.test);
  }

}
