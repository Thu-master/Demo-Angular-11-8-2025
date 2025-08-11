import { Component } from '@angular/core';
import {MatFormField, MatHint, MatInput, MatLabel, MatSuffix} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {ProductModel} from '../../models/product.model';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {ProductState} from '../../ngrx/state/product.state';
import {Store} from '@ngrx/store';
import * as productActions from '../../ngrx/actions/product.action';

@Component({
  selector: 'app-upload',
  imports: [
    MatFormField,
    MatLabel,
    MatIconModule,
    MatFormField,
    MatInput,
    MatFormField,
    MatLabel,
    MatHint,
    ReactiveFormsModule,
    MatButton
  ],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent {
  productList!: ProductModel;
  constructor(private store: Store<{
    product: ProductState
  }>  ) {
  }


  productForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    price: new FormControl(0),
    description: new FormControl(''),
    imageUrl: new FormControl('')
  })

  //creat a functuon to submit the form
  submit() {
    if (this.productForm.valid) {
      let productData: ProductModel = {
        id: this.productForm.value.id || '',
        name: this.productForm.value.name || '',
        price: this.productForm.value.price || 0,
        description: this.productForm.value.description || '',
        imageUrl: this.productForm.value.imageUrl || ''
      }

      console.log(productData);
      this.store.dispatch(productActions.addProduct({ product: productData }));
    }
  }
  empty() {
    this.productForm.reset();
    this.productList = {
      id: '',
      name: '',
      price: 0,
      description: '',
      imageUrl: ''
    };
    console.log('Form reset');
  }
}
