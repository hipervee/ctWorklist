import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';
import { Study } from '../core';
@Injectable()
export class PriorityService {
  constructor() { }
  studies: Study[] = [
    { id: 1, first: 'Pervaze', last: 'Ahanger', handle: '@pervaze', score: 33 },
    { id: 2, first: 'Pervaze', last: 'Ahanger', handle: '@pervaze', score: 400 },
    { id: 3, first: 'Pervaze', last: 'Ahanger', handle: '@pervaze' , score: 91},
    { id: 4, first: 'Pervaze', last: 'Ahanger', handle: '@pervaze' , score: 677}
  ];

  studiesPrioritized: Study[] = [
    { id: 3, first: 'Pervaze', last: 'Ahanger', handle: '@pervaze', score: 91 },
    { id: 4, first: 'Pervaze', last: 'Ahanger', handle: '@pervaze', score: 677 },
    { id: 1, first: 'Pervaze', last: 'Ahanger', handle: '@pervaze', score: 33 },
    { id: 2, first: 'Pervaze', last: 'Ahanger', handle: '@pervaze' , score: 400}
  ];
  getStudies(): Observable<Study[]> {
    return Observable.of(this.studies).delay(3000);
  }

  prioritizeStudies(): Promise<Study[]> {
    return Observable.of(this.studiesPrioritized).delay(3000).toPromise();
  }
}
