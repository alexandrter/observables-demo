import {Injectable} from '@angular/core';
import {Observable, Observer} from "rxjs";

@Injectable()
export class CounterService {

  count = 0;
  private intervalId = -1;

  observable = new Observable((observer: Observer<number>) => {
    console.log("we have got a new subscriber!")
    this.intervalId = setInterval(
      () => {
        console.log("tick!") //keeps ticking even after completion!!!
        if (this.count < 10) {
          console.log("calling next!")
          observer.next(this.count);
        } else {
          observer.complete();
        }
      }, 1000);

    return () => console.log("someone just unsubscribed"); //also happens automatically when the observable is completed
  })
}
