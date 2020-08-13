import { Component, OnInit } from '@angular/core';
import { User } from "../../../models/user";
import { UserService } from './../../../services/user.service'

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css']
})
export class TableUsersComponent implements OnInit {
  us = new User( );
  dataSource: any;
  selectedUser: User = new User();
  usersArray : User[] = new Array();

  constructor(private usdsv:UserService) {
  }

  ngOnInit(): void {
    this.getuser();
  }

  getuser() {
    this.usdsv.getallUsers().subscribe(us => {
      const usdata = us.data.users
      this.usersArray = usdata;
    });
  }

  addOrEdit(){
    if(this.selectedUser.id == 0){
      this.selectedUser.id = this.usersArray.length + 1;
      this.usersArray.push(this.selectedUser);
      confirm('Se agrego a [ '+this.selectedUser.username+' '+this.selectedUser.last_name+' ] con exito.');
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

  cleanForm(){
    this.selectedUser = new User();
  }

}
