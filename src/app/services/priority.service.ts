import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { Study } from '../core';
@Injectable()
export class PriorityService {
  constructor() { }
  studies: Study[] = [
    { id: 1, first: 'Pervaze', last: 'Ahanger', handle: '@pervaze' },
    { id: 2, first: 'Pervaze', last: 'Ahanger', handle: '@pervaze' },
    { id: 3, first: 'Pervaze', last: 'Ahanger', handle: '@pervaze' },
    { id: 4, first: 'Pervaze', last: 'Ahanger', handle: '@pervaze' }
  ];

  studiesPrioritized: Study[] = [
    { id: 3, first: 'Pervaze', last: 'Ahanger', handle: '@pervaze' },
    { id: 4, first: 'Pervaze', last: 'Ahanger', handle: '@pervaze' },
    { id: 1, first: 'Pervaze', last: 'Ahanger', handle: '@pervaze' },
    { id: 2, first: 'Pervaze', last: 'Ahanger', handle: '@pervaze' }
  ];
  getStudies(): Observable<Study[]> {
    return Observable.of(this.studies).delay(3000);
  }

  prioritizeStudies(): Promise<Study[]> {
    return Observable.of(this.studiesPrioritized).delay(3000).toPromise();
  }
}
