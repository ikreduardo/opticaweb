import { Component, OnInit } from '@angular/core';
import { Appointment } from "../../../models/appointment";

@Component({
  selector: 'app-table-appointment',
  templateUrl: './table-appointment.component.html',
  styleUrls: ['./table-appointment.component.css']
})
export class TableAppointmentComponent implements OnInit {
  appointmentsArray : Appointment[] = [
    {id: 1, asunto: 'compra de lentes', fecha:'12-08-2020', cliente: 1, observacion: "sin obsrvacion", sucursal: 1},
    {id: 2, asunto: 'compra de lentes', fecha:'12-08-2020 12:00:00', cliente: 2, observacion: "sin obsrvacion", sucursal: 2},
    {id: 3, asunto: 'compra de lentes', fecha:'12-08-2020 12:00:00', cliente: 3, observacion: "sin obsrvacion", sucursal: 3}
  ];

  selectedAppointment: Appointment = new Appointment();

  addOrEdit(){
    if(this.selectedAppointment.id == 0){
      this.selectedAppointment.id = this.appointmentsArray.length + 1;
      this.appointmentsArray.push(this.selectedAppointment);
      confirm('Se agrego [ '+this.selectedAppointment.asunto+' ] con exito.');
    }
    else{
      if(confirm('Deseas actualizar los datos de '+this.selectedAppointment.asunto.toString())){
        this.selectedAppointment = new Appointment();
      }
    }
    
    
  }

  openForEdit(appointment: Appointment){
    this.selectedAppointment = appointment
  }

  delete(){
    if(confirm('Deseas eliminar a '+this.selectedAppointment.asunto.toString())){
      this.appointmentsArray = this.appointmentsArray.filter(x => x != this.selectedAppointment);
      this.selectedAppointment = new Appointment();
    }
  }

  title= 'Administrador';
  constructor() { 
    
  }

  cleanForm(){
    this.selectedAppointment = new Appointment();
  }

  ngOnInit(): void {
  }

}
