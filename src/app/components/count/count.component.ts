import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {Observable, Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import * as CounterActions from '../../ngrx/actions/couter.action';

@Component({
  selector: 'app-count',
  imports: [
    MatButton
  ],
  templateUrl: './count.component.html',
  styleUrl: './count.component.scss',
})
export class CountComponent implements OnInit, OnDestroy {

  subcription:Subscription[] = []
  count$!: Observable<number>;
  countInCount: number = 0;
  constructor(private store: Store<{count: number}>) {

    //Cach 1
    this.count$ = this.store.select('count');
  }


  ngOnInit() {
    this.subcription.push(
      this.count$.subscribe(count  => {
        this.countInCount = count
        console.log('count value:', count);
      })
    )
  }

  increment() {
    this.store.dispatch(CounterActions.increment())
  }
  decrement() {
    this.store.dispatch(CounterActions.decrement())
  }

  ngOnDestroy() {
    this.subcription.forEach(subcription => subcription.unsubscribe());
  }

}
