import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminNavComponent } from './components/dashboard/admin-nav/admin-nav.component';
import { TableUsersComponent } from './components/tables/table-users/table-users.component';
import { TableProductsComponent } from './components/tables/table-products/table-products.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { TableRolComponent } from "./components/tables/table-rol/table-rol.component";
import { TableStoreComponent } from "./components/tables/table-store/table-store.component";


const routes: Routes = [
  
  {path: "Admin", component: AdminNavComponent, children: [
    { path: 'users', component: TableUsersComponent},
    { path: 'products', component: TableProductsComponent },
    { path: 'rols', component: TableRolComponent },
    { path: 'stores', component: TableStoreComponent },
    { path: '', component: TableUsersComponent}
  ]},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
