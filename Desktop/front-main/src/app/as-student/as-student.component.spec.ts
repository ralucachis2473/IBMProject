import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsStudentComponent } from './as-student.component';

describe('AsStudentComponent', () => {
  let component: AsStudentComponent;
  let fixture: ComponentFixture<AsStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
