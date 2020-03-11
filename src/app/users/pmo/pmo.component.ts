import { Component, OnInit } from '@angular/core';
import { Incident } from '../../models/incident.model';
import { IncidentService } from '../../shared/incident.service'; 
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AgGridupdateButtonComponent } from '../../grids/ag-gridupdate-button.component'



@Component({
  selector: 'app-pmo',
  templateUrl: './pmo.component.html',
  styleUrls: ['./pmo.component.scss']
})
export class PmoComponent implements OnInit {
  incidentList: Incident[] = [];
  selectedIncident: Incident[] = [];
  isIncidentList: boolean = false;
  workstation: Array<string> = [    
    'Remove Seat',
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

  gridApi: any;
  columnApi: any;
  defaultColDef;
  rowSelection:string;
  frameworkComponents: any;
  columnDefs: Array<any> = [
    {headerName: "EnterpriseId", field: "enterpriseId" },
    {headerName: "Name", field: "firstName" },
    {headerName: "SeatNo", field: "seatNo",
    cellEditor: "agSelectCellEditor",
    cellEditorParams: {
      cellHeight: 50,
      values: this.workstation
    }},
    {headerName: "Status", field: "status",
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        cellHeight: 50,
        values: [
        'Open',
        'In Progress',
        'Clarification Required',
        'Clarification Received',
        'Resolved',
        'Rejected']
      }
    },
    {headerName: "Comments", field: "description" },
    {headerName: 'One', field: 'fieldName',
      editable: false,
      cellRenderer : function(params){
          return '<button (click)="rowSelection111(params)">Update</button>'
      }
    },
    {
      headerName: "Child/Parent",
      field: "value",
      editable: false,
      cellRenderer: "updateButtonComponent",
      colId: "params",
      width: 180
    }
  ];
  
  //rowData: Array<any>;
  // rowData: Array<any> = [
  //   {enterpriseId: "user.test", name: "user", seatNo: "cdc2b.02.0190", status: "Allocate", comments: "test comments" },
  //   {enterpriseId: "user1.test", name: "user1", seatNo: "", status: "Removed", comments: "test comments" },
  //   {enterpriseId: "user2.test", name: "user2", seatNo: "cdc2b.02.0191", status: "Allocate", comments: "test comments" },
  // ];  

  constructor(private incidentService: IncidentService, private _router: Router) { 
    this.defaultColDef = {
      editable: true,
      resizable: true
    };   
    this.rowSelection = "single";

    var gridOptions = {
      onRowClicked: this.RowSelected,
      suppressRowClickSelection: true,
      enableRangeSelection: true,
      enableCellChangeFlash: true,
      rowSelection: 'single',
      rowData: null
    };
    this.frameworkComponents = {
      updateButtonComponent: AgGridupdateButtonComponent
    };


  }

  ngOnInit() {
    this.getAllInsidentData();
  } 

  getAllInsidentData() {
    this.incidentService.getAllInsident().subscribe(
      res => { 
        console.log('res', res);
        this.incidentList = res;
        this.isIncidentList = this.incidentList.length > 0 ? true : false;
      },
      err => { 
        console.log('err') 
      }
  )}
  rowSelection111(){
    console.log('Hioioioioioioioioioioioioioioioioioio');
  }

  onBtnClick(){
    alert('onBtnClick');
  }
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

  onUpdateIncident(){}

  onOpenItem(incident: any) {

  }
  onProgressItem() {}
  onCloseItem() {}
  onResolvedItem() {}
  onRejectedItem() {}
  onClarificationRequired() {}
  onClarificationReceived() {}

  onGridReady(params){
    this.gridApi = params.api;
    this.columnApi = params.columnApi;    
  }
  RowSelected(event){
    console.log("Hiiiiiiiiiiiiiiiiiiiii");
    if(event.node.isSelected()){
      console.log("deselected");
      event.node.setSelected(false, false);
    } else {
      event.node.setSelected(true);
      console.log("selected, add");
    }
    
}

}