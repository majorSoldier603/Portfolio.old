import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegaltextanibntComponent } from './legaltextanibnt.component';

describe('LegaltextanibntComponent', () => {
  let component: LegaltextanibntComponent;
  let fixture: ComponentFixture<LegaltextanibntComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LegaltextanibntComponent]
    });
    fixture = TestBed.createComponent(LegaltextanibntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
