import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Ripple } from 'primeng/ripple';
import { Menubar } from 'primeng/menubar';
import { Button } from "primeng/button";
import { Router, RouterLink } from "@angular/router";
import { UserService } from '../../core/services/user.service';
import { AuthService } from '../../core/services/auth.service';


@Component({
  selector: 'app-user-nav',
  imports: [BadgeModule, AvatarModule, InputTextModule, Ripple, CommonModule, Menubar, Button, RouterLink,OverlayBadgeModule],
  templateUrl: './user-nav.html',
  styleUrl: './user-nav.scss',
})
export class UserNav implements OnInit {
  items: MenuItem[] | undefined;
  isOpen: boolean = false;
  userName: string= ''

  constructor(private userData:UserService,private authService:AuthService,private router:Router) {}
    ngOnInit() {
        this.getUsername();
        this.items = [
            {
                label: 'Home',
                icon: 'pi pi-home',
                path: 'home',
            },
            {
                label: 'products',
                path: 'products',
                icon: 'pi pi-sparkles',
            },
            {
                label: 'category',
                path: 'category',
                icon: 'pi pi-objects-column',
            },
        ];
    }


  toggle() {
    console.log(this.isOpen)
    this.isOpen = !this.isOpen;
  }

  getUsername():void {
    this.userData.userName.subscribe((next) => {
      this.userName = next
      console.log(next)
    })
  }

  logout(): void {
    this.authService.logout().subscribe((next) => {
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      this.router.navigate(['login'])
    })
  }
}
