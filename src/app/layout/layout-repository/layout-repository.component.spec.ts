import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutRepositoryComponent } from './layout-repository.component';

describe('LayoutRepositoryComponent', () => {
	let component: LayoutRepositoryComponent;
	let fixture: ComponentFixture<LayoutRepositoryComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LayoutRepositoryComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LayoutRepositoryComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
