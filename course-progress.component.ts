import { Component, OnInit } from '@angular/core';
import { CourseProgressService } from './service/courseProgress.service';
import { CourseProgressDetails } from '../../providers/models/model/courseProgressDetails';
import { ProgressSummaryComponent } from '../progress-summary/progress-summary.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ProgressSummary } from '../../providers/models/model/progressSummary';
import { ProgressSummaryService } from '../progress-summary/service/progressSummary.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-course-progress',
  templateUrl: './course-progress.component.html',
  styleUrls: ['./course-progress.component.css']
})

export class CourseProgressComponent implements OnInit {
  bsModalRef: BsModalRef;
  private courseProgressDetails: CourseProgressDetails[];
  progressSummaryComponent: ProgressSummaryComponent;
  progressSummary: ProgressSummary;
  progressSummaryService: ProgressSummaryService;
  courseProgressForm: FormGroup;
  associateID:string;
  private detailsCount:number;

  constructor(private courseProgressService: CourseProgressService, private modalService: BsModalService) {
  }

  viewProgressSummary(associateID:string) {
    const initialState = {
      associateID
    };
    this.bsModalRef = this.modalService.show(ProgressSummaryComponent,{initialState});
  }

  ngOnInit() {
    this.getCourseProgressDetails();
  }

  private getCourseProgressDetails() {
    this.courseProgressService.getAssociate().subscribe(model => {
      this.courseProgressDetails = model.value;
    });
  };

  private searchbyID(associateID:string){
    this.courseProgressService.getAssociateById(associateID).subscribe(model => {
      this.courseProgressDetails = model.value;
      this.detailsCount=this.courseProgressDetails.length;
    });
  }

}



