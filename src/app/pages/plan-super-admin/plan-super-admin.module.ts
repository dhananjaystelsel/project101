import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanSuperAdminComponent }  from './plan-super-admin.component'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
const routes: Routes = [{
	path: '',
	data: {
      title: 'Plan - Super Admin',
      urls: [{title: 'minimalistic', url: '/'},{title: 'minimalistic'},{title: 'minimalistic'}]
    },
	component: PlanSuperAdminComponent
}];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NgbModule.forRoot()
  ],
  declarations: [PlanSuperAdminComponent]
})
export class PlanSuperAdminModule { }
