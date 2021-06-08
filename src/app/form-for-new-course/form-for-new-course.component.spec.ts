import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormForNewCourseComponent } from './form-for-new-course.component';

describe('FormForNewCourseComponent', () => {
  let component: FormForNewCourseComponent;
  let fixture: ComponentFixture<FormForNewCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormForNewCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormForNewCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
