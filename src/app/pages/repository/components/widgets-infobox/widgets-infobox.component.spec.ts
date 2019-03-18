import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsInfoboxComponent } from './widgets-infobox.component';

describe('WidgetsInfoboxComponent', () => {
  let component: WidgetsInfoboxComponent;
  let fixture: ComponentFixture<WidgetsInfoboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetsInfoboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetsInfoboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
