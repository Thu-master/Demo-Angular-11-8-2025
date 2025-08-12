import {Component, LOCALE_ID, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {ProductState} from '../../ngrx/state/product.state';
import {Observable, Subscription} from 'rxjs';
import {ProductModel} from '../../models/product.model';
import {DecimalPipe} from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';

registerLocaleData(localeVi);

@Component({
  selector: 'app-home',
  imports: [
    DecimalPipe
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'vi' }
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit , OnDestroy{

  productList$!: Observable<ProductModel[]>;

  subscriptions: Subscription[] = [];

  productData: ProductModel[] = [];

  constructor(
    private store: Store<{
      product: ProductState
    }>
  ) {
    this.productList$ = this.store.select('product', 'productList');
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  ngOnInit() {
    this.subscriptions.push(
      this.productList$.subscribe(productList => {
        this.productData = productList;
        console.log(this.productData);
      })
    )
  }

  trackById(index: number, item: ProductModel) {
    return item.id;
  }
}
