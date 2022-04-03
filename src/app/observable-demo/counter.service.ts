import {Injectable} from '@angular/core';
import {Observable, Observer} from "rxjs";

@Injectable()
export class CounterService {

  count = 0;

  observable = new Observable((observer: Observer<number>) => {
    console.log("we have got a new subscriber!")
    setInterval(
      () => {
        console.log("calling next!")
        observer.next(this.count);
      }, 1000);

    return () => console.log("someone just unsubscribed");
  })
}
