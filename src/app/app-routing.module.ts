import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { SerivcesComponent } from './serivces/serivces.component';

const routes: Routes = [
  { component: HomeComponent, path: 'home' },
  { component: AboutComponent, path: 'about' },
 {component:SerivcesComponent,path:'serivce'},
  {component:ProductComponent,path:'product'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
