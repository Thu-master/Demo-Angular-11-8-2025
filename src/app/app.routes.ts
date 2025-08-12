// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },
  {
    path: 'upload',
    loadComponent: () => import('./pages/upload/upload.component').then(m => m.UploadComponent),
  },
  {
    path: '',
    redirectTo: 'upload',
    pathMatch: 'full'
  }
];
