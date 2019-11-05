import { Component, OnInit, ViewChild } from '@angular/core';
import { ProgressSummaryService } from './service/progressSummary.service';
import { ProgressSummary } from '../../providers/models/model/progressSummary';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ModalDirective } from 'ngx-bootstrap';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'modal-content',
  templateUrl: './progress-summary.component.html',
  styleUrls: ['./progress-summary.component.css']
})
export class ProgressSummaryComponent implements OnInit {
  private progressSummary: ProgressSummary[];
  associateID:string;

  constructor(public bsModalRef: BsModalRef, private progressSummaryService: ProgressSummaryService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.getProgressSummary(this.associateID);
  }

  private getProgressSummary(associateID:string) {
    this.progressSummaryService.getSummary(associateID).subscribe(model => {
      this.progressSummary = model.value.value
    });
  };

}
