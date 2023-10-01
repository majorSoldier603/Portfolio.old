import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowScrollLeftComponent } from './arrow-scroll-left.component';

describe('ArrowScrollLeftComponent', () => {
	let component: ArrowScrollLeftComponent;
	let fixture: ComponentFixture<ArrowScrollLeftComponent>;

	beforeEach(() => {
		TestBed.configureTestingModule({
			declarations: [ArrowScrollLeftComponent]
		});
		fixture = TestBed.createComponent(ArrowScrollLeftComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
