import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsAdminComponent } from './as-admin.component';

describe('AsAdminComponent', () => {
  let component: AsAdminComponent;
  let fixture: ComponentFixture<AsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
