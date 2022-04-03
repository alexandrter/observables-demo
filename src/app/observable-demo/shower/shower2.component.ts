import {Component, OnInit} from '@angular/core';
import {CounterService} from "../counter.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-shower2',
  templateUrl: './shower2.component.html',
})
export class Shower2Component implements OnInit {

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
        () => console.log("observable completed")
      );
  }

  unsubscribe() {
    this.subscription?.unsubscribe();
  }
}
