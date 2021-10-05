import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


const routes: Routes = [
  {
    path:'homepage',
    component : HomepageComponent
  },
  {
    path:'employees',
    component : EmployeesComponent
  },
  {
    path:'contact',
    component : ContactComponent
  },
  {
    path:'about',
    component : AboutComponent
  }
];

@NgModule({
  declarations: [EmployeesComponent,AboutComponent,ContactComponent],
  imports: [
     CommonModule,
     RouterModule.forChild(routes),
     FormsModule,
     NgxPaginationModule,
  ]
})
export class EmployeesAppModule { }
