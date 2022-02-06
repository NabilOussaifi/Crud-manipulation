import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Modele/Model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
listProduct: Product[] = [];
  constructor(private serviceProduit: ProductsService) { }

  ngOnInit(): void {
    this.getAll();
  }
getAll(){
  this.serviceProduit.getProduct().subscribe(listProduct=>this.listProduct=listProduct)
}
deleteP(id){
  this.serviceProduit.deleteProduct(id).subscribe(()=>{
  this.listProduct=this.listProduct.filter(listProduct=>listProduct.id != id)}
  )
}
addP(listProduct){
  this.serviceProduit.ajoutProduct(listProduct).subscribe((listProduct)=>{
    this.listProduct=[listProduct, ...this.listProduct];
    }
  )
}
}
