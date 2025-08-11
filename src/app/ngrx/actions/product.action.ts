import {createAction, props} from '@ngrx/store';
import {ProductModel} from '../../models/product.model';

export const getAllProducts = createAction(
  '[Product] Get All Products'
);
  export const addProduct = createAction(
  '[Product] Add Product',
  props<{ product: ProductModel }>()
);
