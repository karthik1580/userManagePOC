import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-msg-wrapper',
  templateUrl: './error-msg-wrapper.component.html',
  styleUrls: ['./error-msg-wrapper.component.scss']
})
export class ErrorMsgWrapperComponent implements OnInit {

  @Input() errorMsgObj: Array<any>[];

  constructor() { }

  ngOnInit() {
    console.log('errorMsgObj', this.errorMsgObj)
  }

}
