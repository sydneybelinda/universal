import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MockActivatedRoute {
  params: any;

  private readonly subject: BehaviorSubject<Params>;
  private _testParams: any;

  constructor() {
    this.subject = new BehaviorSubject(this.testParams);
    this.params = this.subject.asObservable();
  }

  get testParams(): any {
    return this._testParams;
  }

  set testParams(params: any) {
    this._testParams = params;
    this.subject.next(params);
  }

  // get snapshot(): any {
  //   return {params: this.testParams};
  // }
}
