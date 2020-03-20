import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTextBoxComponent } from './input-text-box.component';

describe('InputTextBoxComponent', () => {
  let component: InputTextBoxComponent;
  let fixture: ComponentFixture<InputTextBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTextBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
