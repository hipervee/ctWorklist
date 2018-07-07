import { Component, OnInit } from '@angular/core';
import { PriorityService } from '../services/priority.service';
import { Study } from '../core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {
  studiesPromise: Promise<Study[]>;
  studies: Study[] = [];
  constructor(private prioritySvc: PriorityService, private toaster: ToastrService) {
  }

  ngOnInit() {
    this.prioritySvc.getStudies().subscribe(response => {
      this.studies = response;
    });;
  }

  runAlgorithm() {
    this.studiesPromise = this.prioritySvc.prioritizeStudies();
    this.studiesPromise.then(response => {
      this.studies = response;
      this.toaster.success('Studies Prioritized Successfully');
    });

    
  }
}
