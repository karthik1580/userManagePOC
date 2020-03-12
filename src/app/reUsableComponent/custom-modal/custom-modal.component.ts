import { Component, OnInit, Input } from '@angular/core';
import { Incident } from '../../models/incident.model';

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent implements OnInit {
  @Input() selectedIncident: Incident[] = [];
  constructor() { }

  ngOnInit() {
    console.log("J0OOOOOOOOOO", this.selectedIncident);
  }

}
