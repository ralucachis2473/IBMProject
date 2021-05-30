import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsTeacherComponent } from './as-teacher.component';



describe('AsTeacherComponent', () => {
  let component: AsTeacherComponent;
  let fixture: ComponentFixture<AsTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
