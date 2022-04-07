import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit{

  originalObservable = new Observable<number>(observer => {
    console.log("emitting first value of original observable");
    observer.next(1);
    console.log("emitting second value of original observable");
    observer.next(2);
    console.log("emitting third value of original observable");
    observer.next(3);
  })

  transformedObservable = this.originalObservable.pipe(
    map(value => {
      console.log("emitting a value of transformed observable")
      return value + 10;
    })
  )

  ngOnInit(): void {
    this.originalObservable.subscribe(next => console.log("consuming value = " + next))
    // this.transformedObservable.subscribe(next => console.log("consuming value = " + next))
  }
}
