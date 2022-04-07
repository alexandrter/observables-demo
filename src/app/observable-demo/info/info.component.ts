import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
})
export class InfoComponent implements OnInit, OnDestroy {

  subscription?: Subscription;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    console.log('subscription status: closed=' + this.subscription?.closed);
    this.subscription = this.activatedRoute.url
      .subscribe(url => console.log('Observing from InfoComponent. The URL changed to: ' + url))
      .add(new Subscription(() => console.log("UNSUBSCRIBED!"))); //won't be shown!
  }

  ngOnDestroy() {
    console.log('InfoComponent destroyed. No unsubscription performed by component');
  }
}
