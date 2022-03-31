import {Component, OnInit} from '@angular/core';
import {CounterService} from "../counter.service";

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
})
export class ClickerComponent implements OnInit {

  constructor(private counterService: CounterService) {
  }

  ngOnInit() {
  }

  onClick() {
    this.counterService.count++;
  }
}
