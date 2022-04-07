import {Component, OnInit} from '@angular/core';
import {CounterService} from "../counter.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shower',
  templateUrl: './shower.component.html',
})
export class ShowerComponent implements OnInit {

  clickCounter = 0;
  subscription?: Subscription;

  constructor(private counterService: CounterService) {
  }

  ngOnInit() {

  }

  subscribe() {
    this.subscription = this.counterService.observable
      .subscribe(
        click => this.clickCounter = click,
        error => console.log("error occurred " + error),
        () => console.log("observable completed") //does not happen when unsubscribing!
      ).add(new Subscription(() => console.log("UNSUBSCRIBE")));
  }

  unsubscribe() {
    this.subscription?.unsubscribe();
  }
}
