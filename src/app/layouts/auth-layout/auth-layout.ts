import { Component } from '@angular/core';
import { AuthNav } from '../../components/auth-nav/auth-nav';
import { RouterOutlet } from '@angular/router';
import { AuthFooter } from "../../components/auth-footer/auth-footer";


@Component({
  selector: 'app-auth-layout',
  imports: [AuthNav, RouterOutlet, AuthFooter],
  templateUrl: './auth-layout.html',
  styleUrl: './auth-layout.scss',
})
export class AuthLayout {

}
