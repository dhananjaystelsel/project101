import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinimalisticComponent } from './minimalistic.component';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
const routes: Routes = [{
	path: '',
	data: {
      title: 'minimalistic',
      urls: [{title: 'minimalistic', url: '/'},{title: 'minimalistic'},{title: 'minimalistic'}]
    },
	component: MinimalisticComponent
}];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule.forRoot()    
  ],
  declarations: [MinimalisticComponent]
})
export class MinimalisticModule { }
