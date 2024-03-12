import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnScrollArrowComponent } from './on-scroll-arrow.component';

describe('OnScrollArrowComponent', () => {
  let component: OnScrollArrowComponent;
  let fixture: ComponentFixture<OnScrollArrowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnScrollArrowComponent]
    });
    fixture = TestBed.createComponent(OnScrollArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
