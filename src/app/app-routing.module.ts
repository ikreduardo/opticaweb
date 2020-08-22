import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminNavComponent } from './components/dashboard/admin-nav/admin-nav.component';
import { TableUsersComponent } from './components/tables/table-users/table-users.component';
import { TableProductsComponent } from './components/tables/table-products/table-products.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeComponent } from './components/home/home.component'
import { AuthGuard } from './components/guards/auth.guard';


const routes: Routes = [
  
  {path: "Admin", component: AdminNavComponent, canActivate:[AuthGuard], children: [
    { path: 'users', component: TableUsersComponent},
    { path: 'products', component: TableProductsComponent },
    { path: 'rols', component: TableUsersComponent },
    { path: 'stores', component: TableUsersComponent },
    /*{ path: "appointment", component: TableAppointmentComponent},
    { path: '', component: WellcomeAdminComponent }*/
  ]},
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
