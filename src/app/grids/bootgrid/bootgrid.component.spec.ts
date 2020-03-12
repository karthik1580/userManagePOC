import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootgridComponent } from './bootgrid.component';

describe('BootgridComponent', () => {
  let component: BootgridComponent;
  let fixture: ComponentFixture<BootgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
