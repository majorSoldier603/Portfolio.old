import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppArrowScrollRightComponent } from './app-arrow-scroll-right.component';

describe('AppArrowScrollRightComponent', () => {
  let component: AppArrowScrollRightComponent;
  let fixture: ComponentFixture<AppArrowScrollRightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppArrowScrollRightComponent]
    });
    fixture = TestBed.createComponent(AppArrowScrollRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
