import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Modele/Model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
url="http://localhost:3000/Product";
  constructor(private http: HttpClient) {

   }
   getProduct(){
     return this.http.get<Product[]>(this.url);
   }
   deleteProduct(id){
    return this.http.delete(`${this.url}/${id}`);
   }
   ajoutProduct(listProduct){
     return this.http.post<Product>(this.url,listProduct);
   }
}
