import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
})
export class ClickerComponent implements OnInit {

  clickCounterParent = 0;

  ngOnInit() {
  }

  onClick() {
    this.clickCounterParent++;
    console.log("emitting a value?");
  }
}
