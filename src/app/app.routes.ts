import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:"",redirectTo:'auth',pathMatch:'full'},
  {
    path: "auth",
    loadComponent: () => import('./layouts/auth-layout/auth-layout').then((c) => c.AuthLayout),
    children: [
      {path: "",redirectTo:'login',pathMatch:'full'},
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
    loadComponent: () => import('./layouts/user-layout/user-layout').then((c)=>c.UserLayout),
    children: [
      {path: "",redirectTo:'home',pathMatch:'full'},
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home').then((c) => c.Home),
      },
    ]
  }
];
