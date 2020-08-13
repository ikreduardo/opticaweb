import { Component, OnInit } from '@angular/core';
import { Store } from "../../../models/store";

@Component({
  selector: 'app-table-store',
  templateUrl: './table-store.component.html',
  styleUrls: ['./table-store.component.css']
})
export class TableStoreComponent implements OnInit {
  storesArray : Store[] = [
    {id: 1, name: 'Suc la Rosita',direction:'Pso la Rosita #125 Nte', phone:'8717321111'},
    {id: 2, name: 'Suc Senderos',direction:'Blv Senderos 650', phone:'8717141516'},
    {id: 3, name: 'Suc Campestre',direction:'Paseo de las Flores #65', phone:'8717328611'}
  ];

  selectedStore: Store = new Store();

  addOrEdit(){
    if(this.selectedStore.id == 0){
      this.selectedStore.id = this.storesArray.length + 1;
      this.storesArray.push(this.selectedStore);
      confirm('Se agrego [ '+this.selectedStore.name+' ] con exito.');
    }
    else{
      if(confirm('Deseas actualizar los datos de '+this.selectedStore.name.toString())){
        this.selectedStore = new Store();
      }
    }
    
    
  }

  openForEdit(store: Store){
    this.selectedStore = store
  }

  delete(){
    if(confirm('Deseas eliminar a '+this.selectedStore.name.toString())){
      this.storesArray = this.storesArray.filter(x => x != this.selectedStore);
      this.selectedStore = new Store();
    }
  }

  title= 'Administrador';
  constructor() { 
    
  }

  cleanForm(){
    this.selectedStore = new Store();
  }

  ngOnInit(): void {
  }

}
