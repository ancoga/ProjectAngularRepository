import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetsCardComponent } from './widgets-card.component';

describe('WidgetsCardComponent', () => {
	let component: WidgetsCardComponent;
	let fixture: ComponentFixture<WidgetsCardComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [WidgetsCardComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(WidgetsCardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
