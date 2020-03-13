import { Component, OnInit } from '@angular/core';
import { Incident } from '../../models/incident.model';
import { IncidentService } from '../../shared/incident.service'; 
import { Router } from '@angular/router';
import { NgForm, FormBuilder, FormArray } from '@angular/forms';
//import { AgGridupdateButtonComponent } from '../../grids/ag-gridupdate-button.component'



@Component({
  selector: 'app-pmo',
  templateUrl: './pmo.component.html',
  styleUrls: ['./pmo.component.scss']
})
export class PmoComponent implements OnInit {
  incidentList: Incident[] = [];
  selectedIncident: Incident[] = [];
  incidentDetail: any = {};
  isIncidentList: boolean = false;
  showCustomModal: boolean = false;
  isRowDataDisable: boolean = false;
  radioSelected: any;
  workstation: Array<string> = [    
    'Not yet assign',
    'CDC2B.02.191',
    'CDC2B.02.192',
    'CDC2B.02.193',
    'CDC2B.02.194',
    'CDC2B.02.195',
    'CDC2B.02.196',
    'CDC2B.02.197',
    'CDC2B.02.198',
    'CDC2B.02.199',
    'CDC2B.02.200',
  ];

  ticketStatus: Array<string> = [    
    'Open',
    'In Progress',
    'Clarification Required',
    'Clarification Received',
    'Resolved',
    'Rejected'
  ];

  // gridApi: any;
  // columnApi: any;
  // defaultColDef;
  // rowSelection:string;
  // frameworkComponents: any;
  // columnDefs: Array<any> = [
  //   {headerName: "EnterpriseId", field: "enterpriseId" },
  //   {headerName: "Name", field: "firstName" },
  //   {headerName: "SeatNo", field: "seatNo",
  //   cellEditor: "agSelectCellEditor",
  //   cellEditorParams: {
  //     cellHeight: 50,
  //     values: this.workstation
  //   }},
  //   {headerName: "Status", field: "status",
  //     cellEditor: "agSelectCellEditor",
  //     cellEditorParams: {
  //       cellHeight: 50,
  //       values: [
  //       'Open',
  //       'In Progress',
  //       'Clarification Required',
  //       'Clarification Received',
  //       'Resolved',
  //       'Rejected']
  //     }
  //   },
  //   {headerName: "Comments", field: "description" },
  //   {headerName: 'One', field: 'fieldName',
  //     editable: false,
  //     cellRenderer : function(params){
  //         return '<button (click)="rowSelection111(params)">Update</button>'
  //     }
  //   },
  //   {
  //     headerName: "Child/Parent",
  //     field: "value",
  //     editable: false,
  //     cellRenderer: "updateButtonComponent",
  //     colId: "params",
  //     width: 180
  //   }
  // ];
  
  incidentCollectionFroms: FormArray =  this.fb.array([]);
  

  constructor(
    private incidentService: IncidentService, 
    private _router: Router,
    private fb: FormBuilder) {}

  ngOnInit() {
    this.getAllInsidentData();
  } 

  getAllInsidentData() {
    this.incidentService.getAllInsident().subscribe(
      res => { 
        this.incidentList = res;
        this.isIncidentList = this.incidentList.length > 0 ? true : false;
      },
      err => { 
        console.log('err') 
      }
  )}

  getIncidentByIdData(id: any) {
    this.incidentService.updateIncident(id).subscribe(
      res => {
        this.selectedIncident = res;
      },
      err => console.log('err') 
    );
  }

  onAssignWorkstation(selectedUser: any) {
    this.getIncidentByIdData(selectedUser._id); 
    
    if(this.selectedIncident && this.selectedIncident){
      this.onCloseItem()
    }
  }
  getIncidentDetail(incidentDetail){    
    let detail = {
      email: incidentDetail.email,
      enterpriseId: incidentDetail.enterpriseId,
      firstName: incidentDetail.firstName,
      lastName: incidentDetail.lastName,
      status: incidentDetail.status,
      isOpen: incidentDetail.isOpen,
      isResolved: incidentDetail.isResolved,
      isClarification: incidentDetail.isClarification,
      created_on: incidentDetail.created_on,
      title: incidentDetail.title,
      issueType: incidentDetail.issueType,
      description: incidentDetail.description,
      
    }    
    this.showCustomModal = true
    this.incidentDetail = detail;
  }

  handleChangeEvent(evt, selectedData: boolean){
    //if(evt.target.checked)
    //this.isRowDataDisable = evt.target.checked ? true : false;
    //console.log('evt--------------', evt.target.checked)
    console.log('evt--------------', evt.target.value)
    console.log('evt--------------', selectedData);
  }
  choose(evt, selectedData: boolean){
    //if(evt.target.checked)
    //this.isRowDataDisable = evt.target.checked ? true : false;
    //console.log('evt--------------', evt.target.checked)
    console.log('choode evt--------------', evt)
    console.log('evt--------------', selectedData);
  }
  createIncident(){
    this._router.navigate(['/incident'])
  }
  backToDashboard(){
    this._router.navigate(['/dashboard'])
  }

  onUpdateIncident(incident: any){

  }

  onOpenItem(incident: any) {

  }
  onProgressItem() {}
  onCloseItem() {}
  onResolvedItem() {}
  onRejectedItem() {}
  onClarificationRequired() {}
  onClarificationReceived() {}

  // onGridReady(params){
  //   this.gridApi = params.api;
  //   this.columnApi = params.columnApi;    
  // }
//   RowSelected(event){
//     console.log("Hiiiiiiiiiiiiiiiiiiiii");
//     if(event.node.isSelected()){
//       console.log("deselected");
//       event.node.setSelected(false, false);
//     } else {
//       event.node.setSelected(true);
//       console.log("selected, add");
//     }
    
// }

}