import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class CounterService {

  private count = 0;

  observable = new EventEmitter<number>();

  increment() {
      this.count++;
    console.log("observable emitting a value?");
    this.observable.emit(this.count);
  }
}
