import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagesComponent} from './pages.component'

const routes: Routes = [{ path: '', component: PagesComponent,
children:[
   { path: 'show', loadChildren: './show/show.module#ShowModule'},
   { path: 'minimalistic', loadChildren: './minimalistic/minimalistic.module#MinimalisticModule'}
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
