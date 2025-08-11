import {ProductState} from '../state/product.state';
import * as productActions from '../actions/product.action';
import {createReducer, on} from '@ngrx/store';
import {ProductModel} from '../../models/product.model';

export const initialState: ProductState = {
  productList: <ProductModel[]>[],
}

export const productReducer = createReducer(
  initialState,
  on(productActions.addProduct,(state, {product, type })=> {
    return {
      productList: [...state.productList, product],
    }
  })
)
