import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoursMaterialComponent } from './colours-material.component';

describe('ColoursMaterialComponent', () => {
  let component: ColoursMaterialComponent;
  let fixture: ComponentFixture<ColoursMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColoursMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoursMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
