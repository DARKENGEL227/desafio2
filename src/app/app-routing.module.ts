import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import {DescripcionComponent} from  './descripcion/descripcion.component';

const routes: Routes = [
  {
    path : 'home',
    component:MainComponent 
  },
  {
    path : 'des/:id',
    component:DescripcionComponent
  },
  {
    path : '',
    redirectTo:'/home',
    pathMatch:'full',
  },
  {
    path : '**',
    redirectTo:'/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 