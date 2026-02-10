import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { Button } from 'primeng/button';
import { Message } from 'primeng/message';
import { Toast } from 'primeng/toast';
import { AuthService } from '../../core/services/auth.service';
import { IRegister } from '../../core/Interfaces/iregister';
import { MessageService } from 'primeng/api';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, InputGroupModule, InputGroupAddonModule, InputTextModule, SelectModule, InputNumberModule,ReactiveFormsModule,Button,Message,Toast,NgxSpinnerModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
  providers: [MessageService]
})
export class Register {
  msgs:string[] = ['2']

  username!: FormControl
  email!: FormControl
  password!: FormControl
  repassword!: FormControl

  registerationForm!: FormGroup

  constructor(private _authServices:AuthService,private messageService:MessageService,private spinner:NgxSpinnerService,private _router:Router) {
    this.initFormControls()
    this.initFormGroup()
  }

  initFormControls(): void {
    this.username = new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)])
    this.email = new FormControl('',[Validators.required,Validators.email])
    this.password = new FormControl('',[Validators.required,Validators.minLength(8)])
    this.repassword = new FormControl('',[Validators.required,this.passwordMatch(this.password)])
  }

  initFormGroup(): void {
    this.registerationForm = new FormGroup({
      username: this.username,
      email: this.email,
      password: this.password,
      repassword: this.repassword
    })
  }

  passwordMatch(pass:AbstractControl):ValidatorFn {
    return (rePass:AbstractControl): null | {[key:string]:boolean} => {
      if(pass.value !== rePass.value) {
        return {passNotMatch:true}
      }
      else {
        return null
      }
    }
  }

  submit():void {
    if(this.registerationForm.valid) {
      this.registrationApi(this.registerationForm.value)
    }else {
      this.registerationForm.markAllAsTouched()
      this.registerationForm.markAllAsDirty()
    }
  }

  registrationApi(data:IRegister): void {
    this.spinner.show();
    this._authServices.register(data).subscribe({
      next: (res) => {
        this.show('success')
        this.spinner.hide();
        this._router.navigate(['auth/login'])
      },
      error: (err) => this.show('error')
    })
  }

  show(type:string) {
        this.messageService.add({ severity: type, summary: type, detail: 'Register', life: 3000 });
  }
}
