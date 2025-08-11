import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import {counterReducer} from './ngrx/reducer/couter.reducer';
import {productReducer} from './ngrx/reducer/product.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideStore(
      {
        count: counterReducer,
        product: productReducer,
      }
    ),
  ]
};
