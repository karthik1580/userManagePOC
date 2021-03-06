import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-ag-gridupdate-button',
  template: `<span><button style="height: 20px" (click)="invokeParentMethod()" class="btn btn-info">Invoke Parent</button></span>`,
  styles: [
      `.btn {
          line-height: 0.5
      }`
  ]
})
export class AgGridupdateButtonComponent implements OnInit, ICellRendererAngularComp {
//https://www.ag-grid.com/javascript-grid-cell-rendering-components/
  constructor() { }

  ngOnInit() {
  }

  public params: any;

  agInit(params: any): void {
      this.params = params;
  }

  public invokeParentMethod() {
      this.params.context.componentParent.methodFromParent(`Row: ${this.params.node.rowIndex}, Col: ${this.params.colDef.headerName}`)
  }

  refresh(): boolean {
      return false;
  }

}


