import { Component, OnInit, ViewChildren, QueryList, ElementRef, AfterViewInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'reUsable';
  @ViewChildren('getAllToggleIcon') getAllToggleIcon: QueryList <ElementRef>
  constructor(private el: ElementRef){

  }
  ngOnInit(){
    
    
  }
  //toggleIcon.nativeElement.indexOf();
  ngAfterViewInit() {
    // this.getAllToggleIcon.forEach((toggleIcon)=> {
    //   console.log('toggleIcon', toggleIcon.nativeElement);
    //   console.log('--toggleIcon', toggleIcon)
    // })
  }

  onKeydown(event) {
    if (event.key === "ArrowDown" || event.keyCode === 40) {
      //console.log(event);
      console.log(document.activeElement);
      this.getAllToggleIcon.forEach((toggleIcon)=> {
        console.log('toggleIcon', toggleIcon.nativeElement);
        console.log('--toggleIcon', toggleIcon)
      })
    }
  }
}


