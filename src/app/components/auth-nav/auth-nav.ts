import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { Button } from 'primeng/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-auth-nav',
  imports: [MenubarModule,Button,RouterLink],
  templateUrl: './auth-nav.html',
  styleUrls: ['./auth-nav.scss']
})
export class AuthNav implements OnInit  {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'login',
        icon: 'pi pi-sign-in',
        path: 'login'
      },
      {
        label: 'register',
        icon: 'pi pi-user-plus',
        path: 'register'
      },
    ];
  }
}
