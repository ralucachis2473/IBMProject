import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsGuestComponent } from './as-guest.component';

describe('AsGuestComponent', () => {
  let component: AsGuestComponent;
  let fixture: ComponentFixture<AsGuestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsGuestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsGuestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
