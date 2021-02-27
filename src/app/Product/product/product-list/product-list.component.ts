import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ProductDto } from '../services/product';
import { Service } from '../services/ProductService.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  itemList: ProductDto[];
  Dialog: boolean=false;

  Product: ProductDto=new ProductDto();

  submitted: boolean;
  rForm: FormGroup;
  post: any;
  titleAlert = 'This field required';
  sucess: boolean;
  fail: boolean;
  Update: boolean;
  totalRowCount: number;
  msgs: { severity: string; summary: string; detail: string; }[];
  constructor(
    private ProductService: Service, 
  
    private confirmationService: ConfirmationService,
    private router: Router,
    private messageService: MessageService,private fb: FormBuilder ) {
      
   }
  
  ngOnInit() {
 this. GatAll();
   
    if (!this.rForm) {
      this.setupForm();
    }
  
  }

  GatAll(){
   debugger;
   this.itemList = [];
   this.ProductService.GetProducts().subscribe((res) => {
     this.itemList = res;
   });
  
  
   
  }
  setupForm() {
    this.rForm = this.fb.group({
      'id':[0],
      
      'productTitle': [null, Validators.required],
      productCode: [null, Validators.required],
      productQuantity: [null, Validators.required],
     
    });
   
  }

  openNew() {
   debugger;
 
    this.rForm.reset();
    this.setupForm();
    this.submitted = false;
    this.Dialog = true;
    this.Update=false;
}
save(){
  if(this.Update==false){
    this.Add();
  }
  else{
this.UpdateDb();
  }
  this.rForm.reset();
  this.Dialog=false;
}
Add() {
  debugger;
 
 
 
    this.ProductService.AddNewProduct(this.rForm.value).subscribe(
     
      next => {
         debugger;
        if(next!=null){
          this.messageService.add({severity:'success', summary:' ',  key: 'myToast', detail:'  Added successfully'});
       
          this.GatAll(); 
        }
        else{
          this.messageService.add({severity:'error', summary:' ',  key: 'myToast', detail:' Problem ocuured'});

        }
         } 
         ,
      error => { this.fail = true; },
      () => { this.sucess = true; }
      );
}
UpdateDb() {
  debugger;
 
 
 
    this.ProductService.EditProduct(this.rForm.value).subscribe(
     
      next => { debugger;
        if(next !=null){
          this.messageService.add({severity:'success', summary:' ',  key: 'myToast', detail:' Edited suucessfully'});
       
          this.GatAll();
         }
         else{
          this.messageService.add({severity:'error', summary:' ',  key: 'myToast', detail:' Problem ocuured'});

         }
         },
      error => { this.fail = true; },
      () => { this.sucess = true; }
      );
}
showDialog(item:ProductDto){
debugger;
  this.submitted = false;
    this.Dialog = true;
    this.Update=true;
   
    this.rForm = this.fb.group({
     
      'id': this.fb.control(item.id),
      'productTitle':this.fb.control(item.productTitle),
      'productCode':this.fb.control(item.productCode),
      'productQuantity':this.fb.control(item.productQuantity),
    });
}

remove(Model){
  debugger;
  this.confirmationService.confirm({
    message: 'Are you sure that you want to delete ?',
    header: 'Confirmation',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
     
      let object={id: Model.Id};
      this.ProductService.DeleteProduct(Model.id).subscribe
      (
        res => {
          debugger;
          console.log(res);
         
            this.messageService.add({severity:'success', summary:' ',  key: 'myToast', detail:'  Deleted successfully'});
         
            this.GatAll(); 
         },
        err => console.error(err)
      );
    },
    reject: () => {
      this.msgs = [{ severity: 'info', summary: 'Rejected', detail: 'You have rejected' }];
    }
  });
 
}
cancel() {
  this.Dialog=false;

  this.rForm.reset();
}

}