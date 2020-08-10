import { Component, OnInit } from '@angular/core';
import { Rol } from "../../../models/rol";

@Component({
  selector: 'app-table-rol',
  templateUrl: './table-rol.component.html',
  styleUrls: ['./table-rol.component.css']
})
export class TableRolComponent implements OnInit {
  rolsArray : Rol[] = [
    {id: 1, name: 'Administrador',details:'Super Administrador'},
    {id: 2, name: 'Cliente',details:'Cliente de optica'},
    {id: 3, name: 'Repartidor',details:'Repartidor de lentes'}
  ];

  selectedRol: Rol = new Rol();

  addOrEdit(){
    if(this.selectedRol.id == 0){
      this.selectedRol.id = this.rolsArray.length + 1;
      this.rolsArray.push(this.selectedRol);
      confirm('Se agrego [ '+this.selectedRol.name+' ] con exito.');
    }
    else{
      if(confirm('Deseas actualizar el rol de '+this.selectedRol.name.toString())){
        this.selectedRol = new Rol();
      }
    }
    
    
  }

  openForEdit(store: Rol){
    this.selectedRol = store
  }

  delete(){
    if(confirm('Deseas eliminar a '+this.selectedRol.name.toString())){
      this.rolsArray = this.rolsArray.filter(x => x != this.selectedRol);
      this.selectedRol = new Rol();
    }
  }

  title= 'Administrador';
  constructor() { 
    
  }

  cleanForm(){
    this.selectedRol = new Rol();
  }

  ngOnInit(): void {
  }

}
