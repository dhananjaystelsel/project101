import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowComponent } from './show.component';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
const routes: Routes = [{
	path: '',
	data: {
      title: 'Accordion',
      urls: [{title: 'Dashboard', url: '/'},{title: 'ngComponent'},{title: 'Accordion'}]
    },
	component: ShowComponent
}];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgbModule.forRoot()
  ],
  declarations: [ShowComponent]
})
export class ShowModule { }
