import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { InputNumberModule } from 'primeng/inputnumber';
import { Button } from 'primeng/button';
import { Message } from 'primeng/message';
import { Toast } from 'primeng/toast';
import { NgxSpinnerModule } from 'ngx-spinner';
import { MessageService } from 'primeng/api';
import { AutoFocusModule } from 'primeng/autofocus';




@NgModule({
  declarations: [],
  imports: [FormsModule, InputGroupModule, InputGroupAddonModule, InputTextModule, SelectModule, InputNumberModule,ReactiveFormsModule,Button,Message,Toast,NgxSpinnerModule,AutoFocusModule],
  exports: [FormsModule, InputGroupModule, InputGroupAddonModule, InputTextModule, SelectModule, InputNumberModule,ReactiveFormsModule,Button,Message,Toast,NgxSpinnerModule,AutoFocusModule],
  providers: [MessageService]
})
export class SharedModule { }
