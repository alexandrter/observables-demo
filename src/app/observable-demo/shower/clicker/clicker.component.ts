import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-clicker',
  templateUrl: './clicker.component.html',
})
export class ClickerComponent implements OnInit {

  @Output() clickEmitter = new EventEmitter<number>();
  clickCounter = 0;

  ngOnInit() {
  }

  onClick() {
    this.clickCounter++;
    console.log("emitting a value?");
    this.clickEmitter.emit(this.clickCounter);
  }
}
