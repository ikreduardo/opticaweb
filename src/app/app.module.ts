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
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DriverComponent } from './components/main/driver/driver.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminNavComponent,
    TableUsersComponent,
    TableProductsComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DriverComponent
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
    /*ProductsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }*/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
