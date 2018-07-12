import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { Study } from '../core';
@Injectable()
export class PriorityService {
  constructor() {}
  studies: Study[] = [
    {
      patientId: 'PAT01',
      patientName: 'John Doe',
      gender: 'M',
      dob: '02/03/1954',
      modality: 'M01',
      procedureDescription: 'Neck and Leg',
      procedureDateTime: '07/05/2012',
      accessionNumber: 'AC01',
      studyPriority: '0'
    },
    {
      patientId: 'PAT02',
      patientName: 'Bayer Milla',
      gender: 'M',
      dob: '02/03/1971',
      modality: 'M02',
      procedureDescription: 'Throat',
      procedureDateTime: '07/05/2012',
      accessionNumber: 'AC02',
      studyPriority: '0'
    },
    {
      patientId: 'PAT03',
      patientName: 'Cynathia James',
      gender: 'F',
      dob: '02/03/1962',
      modality: 'M03',
      procedureDescription: 'Knee',
      procedureDateTime: '07/05/2012',
      accessionNumber: 'AC03',
      studyPriority: '0'
    }
  ];

  studiesPrioritized: Study[] = [
    {
      patientId: 'PAT03',
      patientName: 'Cynathia James',
      gender: 'F',
      dob: '02/03/1962',
      modality: 'M03',
      procedureDescription: 'Knee',
      procedureDateTime: '07/05/2012',
      accessionNumber: 'AC03',
      studyPriority: '01'
    },
    {
      patientId: 'PAT01',
      patientName: 'John Doe',
      gender: 'M',
      dob: '02/03/1954',
      modality: 'M01',
      procedureDescription: 'Neck and Leg',
      procedureDateTime: '07/05/2012',
      accessionNumber: 'AC01',
      studyPriority: '02'
    },
    {
      patientId: 'PAT02',
      patientName: 'Bayer Milla',
      gender: 'M',
      dob: '02/03/1971',
      modality: 'M02',
      procedureDescription: 'Throat',
      procedureDateTime: '07/05/2012',
      accessionNumber: 'AC02',
      studyPriority: '03'
    }
  ];
  getStudies(): Observable<Study[]> {
    return Observable.of(this.studies).delay(3000);
  }

  prioritizeStudies(): Promise<Study[]> {
    return Observable.of(this.studiesPrioritized)
      .delay(3000)
      .toPromise();
  }
}
