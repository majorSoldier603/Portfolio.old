import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactScrollUpComponent } from './contact-scroll-up.component';

describe('ContactScrollUpComponent', () => {
  let component: ContactScrollUpComponent;
  let fixture: ComponentFixture<ContactScrollUpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactScrollUpComponent]
    });
    fixture = TestBed.createComponent(ContactScrollUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
