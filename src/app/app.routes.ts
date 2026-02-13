import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  { path: "", redirectTo: 'auth', pathMatch: 'full' },
  {
    path: "auth",
    loadComponent: () => import('./layouts/auth-layout/auth-layout').then((c) => c.AuthLayout),
    children: [
      { path: "", redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        loadComponent: () => import('./pages/login/login').then((c) => c.Login),
      },
      {
        path: 'register',
        loadComponent: () => import('./pages/register/register').then((c) => c.Register),
      },
    ]
  },
  {
    path: 'user',
    loadComponent: () => import('./layouts/user-layout/user-layout').then((c) => c.UserLayout),
    children: [
      { path: "", redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home').then((c) => c.Home),
      },
      {
        path: 'cart',
        loadComponent: () => import('./pages/cart/cart').then((c) => c.Cart),
      },
      {
        path: 'products',
        loadComponent: () => import('./pages/products/products').then((c) => c.Products),
      },
      {
        path: 'details',
        loadComponent: () => import('./pages/details/details').then((c) => c.Details),
      },
      {
        path: 'category',
        loadComponent: () => import('./pages/category/category').then((c) => c.Category),
      }
    ],
    canActivate: [authGuard],
  }
];
