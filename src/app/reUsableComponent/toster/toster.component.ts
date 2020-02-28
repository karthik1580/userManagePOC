import { Component, OnInit, Input } from '@angular/core';
import { Toster } from 'src/app/models/toster.model';

@Component({
  selector: 'app-toster',
  templateUrl: './toster.component.html',
  styleUrls: ['./toster.component.scss']
})
export class TosterComponent implements OnInit {
  @Input() toserMessage: Toster[] = [];
  
  toserMsg: any;
  constructor() { }

  ngOnInit() {
    this.getMessgae();
  }
  getMessgae() {  
    this.toserMsg = this.toserMessage[0];
  } 

}
