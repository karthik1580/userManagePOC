import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-text-box',
  templateUrl: './input-text-box.component.html',
  styleUrls: ['./input-text-box.component.scss']
})
export class InputTextBoxComponent implements OnInit {

  @Input() _id: any;
  @Input() fieldLabel: string;
  @Input() ariaLabel: string;
  @Input() required: boolean;
  constructor() { }

  ngOnInit() {
  }

}
