import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class CounterService {

  private count = 0;

  observable = new EventEmitter<number>();

  increment() {
    if (this.count < 10) {
      this.count++;
      console.log("calling next?")
      this.observable.emit(this.count);
    } else {
      this.observable.complete();
    }
  }
}
