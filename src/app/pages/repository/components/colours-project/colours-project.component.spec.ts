import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoursProjectComponent } from './colours-project.component';

describe('ColoursProjectComponent', () => {
	let component: ColoursProjectComponent;
	let fixture: ComponentFixture<ColoursProjectComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ColoursProjectComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ColoursProjectComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
