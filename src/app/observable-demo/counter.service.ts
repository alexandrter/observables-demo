import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable()
export class CounterService {

  private count = 0;

  observable = new Subject<number>();

  increment() {
    if (this.count < 10) {
      this.count++;
      console.log("calling next?")
      this.observable.next(this.count);
    } else {
      this.observable.complete();
    }
  }
}
