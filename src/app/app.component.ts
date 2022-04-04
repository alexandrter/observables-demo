import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  showShower = true;

  ngOnInit(): void {
    setTimeout( () => this.showShower = false, 10000);
  }
}
