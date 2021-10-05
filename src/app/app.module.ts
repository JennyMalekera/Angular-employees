import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesAppModule } from './employees-app/employees-app.module';
import { FooterbarComponent } from './employees-app/footerbar/footerbar.component';
import { HomepageComponent } from './employees-app/homepage/homepage.component';
import { NavbarComponent } from './employees-app/navbar/navbar.component';
import { EmployeeService } from './services/employee.service';
 import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    NavbarComponent,
    FooterbarComponent,
   ModalComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeesAppModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
