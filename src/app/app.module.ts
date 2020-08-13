import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminNavComponent } from './components/dashboard/admin-nav/admin-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TableUsersComponent } from './components/tables/table-users/table-users.component';
import { TableProductsComponent } from './components/tables/table-products/table-products.component';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { TableRolComponent } from './components/tables/table-rol/table-rol.component';
import { TableStoreComponent } from './components/tables/table-store/table-store.component';
import { HomeComponent } from './components/main/home/home.component';

import { ProductsService } from './../app/services/products.service';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { TableAppointmentComponent } from './components/tables/table-appointment/table-appointment.component';
import { SubadminNavComponent } from './components/dashboard/subadmin-nav/subadmin-nav.component';
import { TableOffersComponent } from './components/tables/table-offers/table-offers.component';
import { TableServicesComponent } from './components/tables/table-services/table-services.component';
import { TableMydriversComponent } from './components/tables/table-mydrivers/table-mydrivers.component';
import { ClientComponent } from './components/dashboard/client/client.component';

// interceptor
import { AuthInterceptorService } from './services/authinterceptor/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminNavComponent,
    TableUsersComponent,
    TableProductsComponent,
    LoginComponent,
    RegisterComponent,
    TableRolComponent,
    TableStoreComponent,
    HomeComponent,
    TableAppointmentComponent,
    SubadminNavComponent,
    TableOffersComponent,
    TableServicesComponent,
    TableMydriversComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ProductsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
