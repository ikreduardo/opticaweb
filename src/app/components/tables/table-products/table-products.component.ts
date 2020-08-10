import { Component, OnInit } from '@angular/core';
//import { Product } from "../../../models/product";
import { Router } from "@angular/router";
import { FormGroup, Validators, FormControl } from "@angular/forms";
import { ProductsService } from "src/app/services/products.service"

@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.css']
})
export class TableProductsComponent implements OnInit {
  FormProduct: FormGroup;

  constructor(private router:Router, private pdsrv:ProductsService ){this.createForm();}

  createForm() {
    this.FormProduct = new FormGroup({
      name: new FormControl('', Validators.compose([Validators.required])),
      brand: new FormControl('', Validators.compose([Validators.required])),
      model: new FormControl('', Validators.compose([Validators.required])),
      description: new FormControl('', Validators.compose([Validators.required])),
      price: new FormControl('', Validators.compose([Validators.required])),
      discount: new FormControl('', Validators.compose([Validators.required])),
      optic_id: new FormControl('', Validators.compose([Validators.required])),
    })
  }

  cleanForm(){
    //this.selectedProduct = new Product();
  }

  ngOnInit(): void {
  }

}
