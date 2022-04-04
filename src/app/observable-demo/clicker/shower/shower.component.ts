import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-shower',
  templateUrl: './shower.component.html',
})
export class ShowerComponent {

  @Input() clickCounterChild = 0;
}
