import {createAction} from '@ngrx/store';
import {ProductModel} from '../../models/product.model';

export interface ProductState{
  productList: ProductModel[];
}
