import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule, TableRadioButton } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SliderModule } from 'primeng/slider';
import { DropdownModule } from 'primeng/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  declarations: [ProductListComponent],
  imports: [  DialogModule,ProductRoutingModule,
    CommonModule,
    TableModule, ReactiveFormsModule,
    ButtonModule, ToolbarModule, InputNumberModule, InputTextareaModule
    , SliderModule, DropdownModule, ModalModule.forRoot(),
    ToastModule, ConfirmDialogModule,InputTextModule,ButtonModule
  ],
  providers: [MessageService],
})
export class ProductModule { }
