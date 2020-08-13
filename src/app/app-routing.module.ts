import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminNavComponent } from './components/dashboard/admin-nav/admin-nav.component';
import { TableUsersComponent } from './components/tables/table-users/table-users.component';
import { TableProductsComponent } from './components/tables/table-products/table-products.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
<<<<<<< HEAD
import { HomeComponent } from './components/home/home.component'
import { AuthGuard } from './components/guards/auth.guard';


const routes: Routes = [
  
  {path: "Admin", component: AdminNavComponent, canActivate:[AuthGuard], children: [
    { path: 'users', component: TableUsersComponent},
=======
import { TableRolComponent } from "./components/tables/table-rol/table-rol.component";
import { TableStoreComponent } from "./components/tables/table-store/table-store.component";
import { HomeComponent } from "./components/main/home/home.component";
import { TableAppointmentComponent } from './components/tables/table-appointment/table-appointment.component';
import { SubadminNavComponent } from './components/dashboard/subadmin-nav/subadmin-nav.component';
import { TableServicesComponent } from './components/tables/table-services/table-services.component';
import { TableOffersComponent } from './components/tables/table-offers/table-offers.component';
import { TableMydriversComponent } from './components/tables/table-mydrivers/table-mydrivers.component';
import { ClientComponent } from './components/dashboard/client/client.component';
import { WellcomeAdminComponent } from './components/main/wellcome-admin/wellcome-admin.component';
import { WellcomeSubAdminComponent } from './components/main/wellcome-sub-admin/wellcome-sub-admin.component';


const routes: Routes = [
  // - RUTAS PARA EL MODULO ADMIN
  {path: "Admin", component: AdminNavComponent, children: [
    // RUTAS HIJAS DEL MODULO ADMIN ---- EJEMPLO: http://localhost:4200/Admin/users
    { path: 'users', component: TableUsersComponent },
>>>>>>> b361a5d3659a2bdeabdc8c545a52fc44a575f54f
    { path: 'products', component: TableProductsComponent },
    { path: 'rols', component: TableRolComponent },
    { path: 'stores', component: TableStoreComponent },
    { path: "appointment", component: TableAppointmentComponent},
    { path: '', component: WellcomeAdminComponent }
  ]},
<<<<<<< HEAD
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent}
=======
  // - RUTAS PARA EL MODULO SUB ADMIN
  { path: "sub-admin", component: SubadminNavComponent, children: [
    // RUTAS HIJAS PARA EL MODULO SUB ADMIN --- EJEMPLO:  http://localhost:4200/sub-admin/appointment
    { path: "products", component: TableProductsComponent},
    { path: "appointment", component: TableAppointmentComponent},
    { path: "services", component: TableServicesComponent},
    { path: "offers", component: TableOffersComponent},
    { path: "mydrivers", component: TableMydriversComponent},
    { path: "", component: WellcomeSubAdminComponent}
  ]},
  // RUTAS INICIALES --- EJEMPLO http://localhost:4200/login
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "home", component: HomeComponent },
  { path: "", component: HomeComponent },
  { path: "client", component: ClientComponent}
>>>>>>> b361a5d3659a2bdeabdc8c545a52fc44a575f54f
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
