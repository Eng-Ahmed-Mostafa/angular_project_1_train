import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { Button } from 'primeng/button';
import { Message } from 'primeng/message';
import { Toast } from 'primeng/toast';
import { AuthService } from '../../core/services/auth.service';
import { ILogin } from '../../core/Interfaces/ilogin';
import { MessageService } from 'primeng/api';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, InputGroupModule, InputGroupAddonModule, InputTextModule, SelectModule, InputNumberModule, ReactiveFormsModule, Button, Message, Toast, NgxSpinnerModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  providers: [MessageService]
})
export class Login {
  msgs: string[] = ['2']

  username!: FormControl
  password!: FormControl

  loginForm!: FormGroup

  constructor(private _authServices: AuthService, private messageService: MessageService, private spinner: NgxSpinnerService, private _router: Router) {
    this.initFormControls()
    this.initFormGroup()
  }

  initFormControls(): void {
    this.username = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)])

    this.password = new FormControl('', [Validators.required, Validators.minLength(4)])
  }

  initFormGroup(): void {
    this.loginForm = new FormGroup({
      username: this.username,
      password: this.password,
    })
  }

  submit(): void {
    if (this.loginForm.valid) {
      this.loginApi(this.loginForm.value)
    } else {
      this.loginForm.markAllAsTouched()
      this.loginForm.markAllAsDirty()
    }
  }

  loginApi(data: ILogin): void {
    this.spinner.show();
    this._authServices.login(data).subscribe({
      next: (res) => {
        this.show('success')
        this.spinner.hide();
        this._router.navigate(['user/home'])
      },
      error: (err) => this.show('error')
    })
  }

  show(type: string) {
    this.messageService.add({ severity: type, summary: type, detail: 'Login', life: 3000 });
  }
}
