import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowPointerComponent } from './arrow-pointer.component';

describe('ArrowPointerComponent', () => {
  let component: ArrowPointerComponent;
  let fixture: ComponentFixture<ArrowPointerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrowPointerComponent]
    });
    fixture = TestBed.createComponent(ArrowPointerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
