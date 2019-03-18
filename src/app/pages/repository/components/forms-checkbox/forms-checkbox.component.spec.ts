import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsCheckboxComponent } from './forms-checkbox.component';

describe('FormsCheckboxComponent', () => {
  let component: FormsCheckboxComponent;
  let fixture: ComponentFixture<FormsCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
