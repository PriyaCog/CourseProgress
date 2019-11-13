import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-course-detail-summary',
  templateUrl: './course-detail-summary.component.html',
  styleUrls: ['./course-detail-summary.component.css']
})

export class CourseDetailSummaryComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

}
