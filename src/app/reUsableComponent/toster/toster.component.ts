import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Toster } from 'src/app/models/toster.model';

@Component({
  selector: 'app-toster',
  templateUrl: './toster.component.html',
  styleUrls: ['./toster.component.scss']
})
export class TosterComponent implements OnInit, AfterViewInit {
  @Input() toserMessage: Toster[];
  toserMsg: any = this.toserMessage[0]; 
  constructor() { }

  ngOnInit() {
    this.getMessgae();
  }
  getMessgae(){
    this.toserMsg;
  }
  ngAfterViewInit(){
    setTimeout(()=>{
      this.toserMsg.showToser = false;
    },1000);
  }
  

}
