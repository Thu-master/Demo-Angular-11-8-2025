import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ProductState} from '../../ngrx/state/product.state';
import {ProductModel} from '../../models/product.model';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  productList$: Observable<ProductModel[]>;

  subscriptions: Subscription[] = [];
  data: ProductModel[] = [];
constructor(private store: Store<{
  product: ProductState}>) {
  this.productList$ = this.store.select('product', 'productList');
}
  ngOnInit() {
    this.subscriptions.push(
      this.productList$.subscribe((product: ProductModel[]) => {
        this.data = product;
        console.log(product);
        console.log(this.data);
      })
    )
  }
  ngOnDestroy() {
  this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
