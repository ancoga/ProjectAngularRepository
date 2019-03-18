import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsRadiobuttonComponent } from './forms-radiobutton.component';

describe('FormsRadiobuttonComponent', () => {
  let component: FormsRadiobuttonComponent;
  let fixture: ComponentFixture<FormsRadiobuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsRadiobuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsRadiobuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
