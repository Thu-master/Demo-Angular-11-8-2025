import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CountComponent} from './components/count/count.component';
import {CounterService} from './services/counter/counter.service';
import {count, Observable, Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import * as CounterActions from '../app/ngrx/actions/couter.action'
import {MatButton} from '@angular/material/button';
import {UploadComponent} from './pages/upload/upload.component';
import {HeaderComponent} from './components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit , OnDestroy {
  title = 'demo-11.8';

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
