import { Component, OnInit } from '@angular/core';
import { Service } from "../../../models/service";


@Component({
  selector: 'app-table-services',
  templateUrl: './table-services.component.html',
  styleUrls: ['./table-services.component.css']
})
export class TableServicesComponent implements OnInit {
  servicesArray : Service[] = [
    {id: 1, name: "lente graduacion +1", description: "lentes elegantes", price: 200, discount: 49, img:"../../../../assets/img/" },
    {id: 2, name: "lente graduacion +1.5", description: "lentes con antireflejante", price: 300, discount: 49, img:"../../../../assets/img/"},
    {id: 3, name: "lente graduacion +3", description: "lentes tipo aviador", price: 450, discount: 49, img:"../../../../assets/img/" },
    {id: 4, name: "lente graduacion +1", description: "lentes elegantes", price: 200, discount: 49, img:"../../../../assets/img/" },
    {id: 5, name: "lente graduacion +1.5", description: "lentes con antireflejante", price: 300, discount: 49, img:"../../../../assets/img/" },
    {id: 6, name: "lente graduacion +1", description: "lentes elegantes", price: 200, discount: 49, img:"../../../../assets/img/" },
    {id: 7, name: "lente graduacion +1.5", description: "lentes con antireflejante", price: 300, discount: 49, img:"../../../../assets/img/" }
  ];
  selectedService: Service = new Service();

  addOrEdit(){
    if(this.selectedService.id == 0){
      this.selectedService.id = this.servicesArray.length + 1;
      this.servicesArray.push(this.selectedService);
      confirm('Se agrego [ '+this.selectedService.name+' ] con exito.');
    }
    else{
      if(confirm('Deseas actualizar los datos de '+this.selectedService.name.toString())){
        this.selectedService = new Service();
      }
    }
    
    
  }

  openForEdit(service: Service){
    this.selectedService = service
  }

  delete(){
    if(confirm('Deseas eliminar '+this.selectedService.name.toString())){
      this.servicesArray = this.servicesArray.filter(x => x != this.selectedService);
      this.selectedService = new Service();
    }
  }

  title= 'Administrador';
  constructor() { 
    
  }

  cleanForm(){
    this.selectedService = new Service();
  }

  ngOnInit(): void {
  }

}
