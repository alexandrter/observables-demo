import {Component, OnInit} from '@angular/core';
import {CounterService} from "../counter.service";

@Component({
  selector: 'app-shower',
  templateUrl: './shower.component.html',
})
export class ShowerComponent implements OnInit {

  clickCounter = 0;

  constructor(private counterService: CounterService) {
  }

  ngOnInit() {
  }

  show() {
    this.clickCounter = this.counterService.count;
  }
}
