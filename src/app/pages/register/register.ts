import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { Button } from 'primeng/button';
import { Message } from 'primeng/message';

@Component({
  selector: 'app-register',
  imports: [FormsModule, InputGroupModule, InputGroupAddonModule, InputTextModule, SelectModule, InputNumberModule,ReactiveFormsModule,Button,Message],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  msgs:string[] = ['2']

  name!: FormControl
  email!: FormControl
  password!: FormControl
  repassword!: FormControl

  registerationForm!: FormGroup

  constructor() {
    this.initFormControls()
    this.initFormGroup()
  }

  initFormControls(): void {
    this.name = new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20)])
    this.email = new FormControl('',[Validators.required,Validators.email])
    this.password = new FormControl('',[Validators.required,Validators.minLength(8)])
    this.repassword = new FormControl('',[Validators.required,this.passwordMatch(this.password)])
  }

  initFormGroup(): void {
    this.registerationForm = new FormGroup({
      name: this.name,
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
      console.log(this.registerationForm.valid)
    }else {
      this.registerationForm.markAllAsTouched()
      this.registerationForm.markAllAsDirty()
    }
  }
}
