
import { NgModule, Component } from '@angular/core';


// Components

import { EmployeeComponent } from './components/employees/employees.component';
import { Employees2Component } from './components/employees2/employees2.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { PreciosComponent } from './components/precios/precios.component';
import { CancionesComponent } from './components/canciones/canciones.component';
import { ProductosComponent } from './components/productos/productos.component';
import { AlbumesComponent } from './components/albumes/albumes.component';
import{ RouterModule,Routes}from '@angular/router';



const appRoutes: Routes = [
  {path:'employees', component:EmployeeComponent},
  {path:'employees2', component:Employees2Component},
  {path:'eventos', component:EventosComponent},
  {path:'precios', component:PreciosComponent},
  {path:'canciones', component:CancionesComponent},
  {path:'albumes', component:AlbumesComponent},
  {path:'productos', component:ProductosComponent}
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]

})
export class AppRoutingModule { }
export const routingComponents=[EmployeeComponent,Employees2Component,EventosComponent, PreciosComponent, CancionesComponent, ProductosComponent, AlbumesComponent]