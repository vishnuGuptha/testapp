import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-for-new-course',
  templateUrl: './form-for-new-course.component.html',
  styleUrls: ['./form-for-new-course.component.css']
})
export class FormForNewCourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output add_cource_form(){
    
  }

}
