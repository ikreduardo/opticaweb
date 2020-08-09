import { Component, OnInit } from '@angular/core';
import { User } from "../../../models/user";

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css']
})
export class TableUsersComponent implements OnInit {
  usersArray : User[] = [
    {id: 1, username: "eduardo",last_name: "perez", direction: "Ave. Indepe", tel: "5580650311", email: "ikreduardo93@gmail.com", password:"12345678", typeuser: 1 },
    {id: 2, username: "Iker",last_name: "perez", direction: "Ave. Indepe", tel: "8717121184", email: "ikreduardo@gmail.com", password:"12345678", typeuser: 2 },
    {id: 3, username: "Diana",last_name: "Fraire", direction: "Ave. Indepe", tel: "8717001122", email: "dyana349@gmail.com", password:"12345678", typeuser: 3 }
  ];

  selectedUser: User = new User();

  addOrEdit(){
    if(this.selectedUser.id == 0){
      this.selectedUser.id = this.usersArray.length + 1;
      this.usersArray.push(this.selectedUser);
    }
    else{
      if(confirm('Deseas actualizar los datos de '+this.selectedUser.email.toString())){
        this.selectedUser = new User();
      }
    }
    
    
  }

  openForEdit(user: User){
    this.selectedUser = user
  }

  delete(){
    if(confirm('Deseas eliminar a '+this.selectedUser.email.toString())){
      this.usersArray = this.usersArray.filter(x => x != this.selectedUser);
      this.selectedUser = new User();
    }
  }

  title= 'Administrador';
  constructor() { 
    
  }

  cleanForm(){
    this.selectedUser = new User();
  }

  ngOnInit(): void {
  }

}
