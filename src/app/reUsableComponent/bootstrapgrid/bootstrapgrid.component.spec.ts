import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapgridComponent } from './bootstrapgrid.component';

describe('BootstrapgridComponent', () => {
  let component: BootstrapgridComponent;
  let fixture: ComponentFixture<BootstrapgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
