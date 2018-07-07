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
  isLoading = false;
  constructor(private prioritySvc: PriorityService, private toaster: ToastrService) {
  }

  ngOnInit() {
    this.loading();
    this.prioritySvc.getStudies().subscribe(response => {
      this.studies = response;
      this.notLoading();
    });;
  }

  runAlgorithm() {
    this.studiesPromise = this.prioritySvc.prioritizeStudies();
    this.studiesPromise.then(response => {
      this.studies = response;
      this.toaster.success('Studies Prioritized Successfully');
    });  
  }

  loading = () => this.isLoading = true;
  notLoading = () => this.isLoading = false;
}
