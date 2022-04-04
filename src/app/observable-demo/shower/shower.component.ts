import {Component, OnDestroy, OnInit} from '@angular/core';
import {CounterService} from "../counter.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shower',
  templateUrl: './shower.component.html',
})
export class ShowerComponent implements OnInit, OnDestroy {

  clickCounter = 0;
  subscription?: Subscription;

  constructor(private counterService: CounterService) {
  }

  ngOnInit() {
    console.log("creating shower and subscribing to observable")
    this.subscription = this.counterService.observable
      .subscribe(
        click => {
          console.log("subscription consuming the emitted value");
          this.clickCounter = click;
        },
        error => console.log("error occurred " + error),
        () => console.log("observable completed")
      );
  }

  ngOnDestroy(): void {
    console.log("destroying shower component");
    //todo ...
  }
}
