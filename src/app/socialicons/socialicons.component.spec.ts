import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialiconsComponent } from './socialicons.component';

describe('SocialiconsComponent', () => {
  let component: SocialiconsComponent;
  let fixture: ComponentFixture<SocialiconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialiconsComponent]
    });
    fixture = TestBed.createComponent(SocialiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
