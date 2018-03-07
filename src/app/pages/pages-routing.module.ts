import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PagesComponent} from './pages.component'

const routes: Routes = [{ path: '', component: PagesComponent,
children:[
   { path: 'show', loadChildren: './show/show.module#ShowModule'},
   { path: 'minimalistic', loadChildren: './minimalistic/minimalistic.module#MinimalisticModule'},
   { path: 'CompanyFormModule', loadChildren: './company-form/company-form.module#CompanyFormModule'},
   { path: 'PlanSuperAdminModule', loadChildren: './plan-super-admin/plan-super-admin.module#PlanSuperAdminModule'},
   { path: 'progressbar', loadChildren: './progressbar/progressbar.module#progressbarModule' },
   { path: 'OfferModule', loadChildren:'./offer/offer.module#OfferModule'}

] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
