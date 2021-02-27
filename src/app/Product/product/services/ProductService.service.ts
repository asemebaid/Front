import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductDto } from './product';


@Injectable({
  providedIn: 'root'
})
export class Service {

  
  baseURL :string;

  constructor(private http: HttpClient) { 
    this.baseURL = environment.baseURL;
  }

  
  GetProducts(){
    let headers: HttpHeaders = new HttpHeaders();    
    headers = headers.append('Accept', 'application/json');
    return this.http.get<ProductDto[]>(this.baseURL+"Product/GetAllProduct",{
      headers : headers
    });
  }

  GetProductsByCourseId(id){
    let headers: HttpHeaders = new HttpHeaders();    
    headers = headers.append('Accept', 'application/json');
    return this.http.get<ProductDto[]>(this.baseURL+"Product/GetProductByCourseId/"+id,{
      headers : headers
    });
  }

 

  AddNewProduct(obj){
    let headers: HttpHeaders = new HttpHeaders();    
    headers = headers.append('Accept', 'application/json');
    return this.http.post(this.baseURL+"Product/AddProduct",obj,{
      headers : headers
    });
  }

  GetProductById(id){
    let headers: HttpHeaders = new HttpHeaders();    
    headers = headers.append('Accept', 'application/json');
    return this.http.get<ProductDto>(this.baseURL+"Product/GetProductById/" + id,{
      headers : headers
    });
  }


  EditProduct(obj){
    let headers: HttpHeaders = new HttpHeaders();    
    headers = headers.append('Accept', 'application/json');
    return this.http.put(this.baseURL+"Product/EditProduct",obj,{
      headers : headers
    });
  }

  DeleteProduct(id){
    let headers: HttpHeaders = new HttpHeaders();    
    headers = headers.append('Accept', 'application/json');
    return this.http.delete(this.baseURL+"Product/DeleteProduct/"+id,{
      headers : headers
    });
  }

}
