import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-incident',
  templateUrl: './create-incident.component.html',
  styleUrls: ['./create-incident.component.scss']
})
export class CreateIncidentComponent implements OnInit {

  incedentType: Array<string> = [
    'Mouse issue',
    'Keyboard issue',
    'System issue',
    'Change Workstation',
    'Headset',
    'Decommission'
  ];

  constructor() { }

  ngOnInit() {
  }

}
