import { Component, OnInit } from '@angular/core';
import { Product } from "../../../models/product";

@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.css']
})
export class TableProductsComponent implements OnInit {
  productsArray : Product[] = [
    {id: 1, name: "lente graduacion +1", description: "lentes elegantes", price: 200, discount: 49 },
    {id: 2, name: "lente graduacion +1.5", description: "lentes con antireflejante", price: 300, discount: 49 },
    {id: 3, name: "lente graduacion +3", description: "lentes tipo aviador", price: 450, discount: 49 },
    {id: 4, name: "lente graduacion +1", description: "lentes elegantes", price: 200, discount: 49 },
    {id: 5, name: "lente graduacion +1.5", description: "lentes con antireflejante", price: 300, discount: 49 },
    {id: 6, name: "lente graduacion +1", description: "lentes elegantes", price: 200, discount: 49 },
    {id: 7, name: "lente graduacion +1.5", description: "lentes con antireflejante", price: 300, discount: 49 },
    {id: 8, name: "lente graduacion +1", description: "lentes elegantes", price: 200, discount: 49 },
    {id: 9, name: "lente graduacion +1.5", description: "lentes con antireflejante", price: 300, discount: 49 },
    {id: 10, name: "lente graduacion +1", description: "lentes elegantes", price: 200, discount: 49 },
    {id: 11, name: "lente graduacion +1.5", description: "lentes con antireflejante", price: 300, discount: 49 },
    {id: 12, name: "lente graduacion +1", description: "lentes elegantes", price: 200, discount: 49 },
    {id: 13, name: "lente graduacion +1.5", description: "lentes con antireflejante", price: 300, discount: 49 },
    {id: 14, name: "lente graduacion +1", description: "lentes elegantes", price: 200, discount: 49 },
    {id: 15, name: "lente graduacion +1.5", description: "lentes con antireflejante", price: 300, discount: 49 },
  ];

  selectedProduct: Product = new Product();

  addOrEdit(){
    if(this.selectedProduct.id == 0){
      this.selectedProduct.id = this.productsArray.length + 1;
      this.productsArray.push(this.selectedProduct);
      confirm('Se agrego [ '+this.selectedProduct.name+' ] con exito.');
    }
    else{
      if(confirm('Deseas actualizar los datos de '+this.selectedProduct.name.toString())){
        this.selectedProduct = new Product();
      }
    }
    
    
  }

  openForEdit(product: Product){
    this.selectedProduct = product
  }

  delete(){
    if(confirm('Deseas eliminar '+this.selectedProduct.name.toString())){
      this.productsArray = this.productsArray.filter(x => x != this.selectedProduct);
      this.selectedProduct = new Product();
    }
  }

  title= 'Administrador';
  constructor() { 
    
  }

  cleanForm(){
    this.selectedProduct = new Product();
  }

  ngOnInit(): void {
  }

}
