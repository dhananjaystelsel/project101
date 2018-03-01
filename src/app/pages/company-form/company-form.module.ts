import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyFormComponent } from './company-form.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule }   from '@angular/forms';
const routes: Routes = [{
	path: '',
	data: {
      title: 'Company Form',
      urls: [{title: 'minimalistic', url: '/'},{title: 'minimalistic'},{title: 'minimalistic'}]
    },
	component: CompanyFormComponent
}];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [CompanyFormComponent]
})
export class CompanyFormModule { }
