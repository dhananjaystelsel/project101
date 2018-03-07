import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfferComponent } from "./offer.component";
import { CoupanComponent} from './coupan/coupan.component';

const routes: Routes = [
  {
    path:'',
    data: {
      title: 'offer',
      urls: [{title: 'offer', url: '/'},{title: 'offer'} ],
  
    },
    component:OfferComponent
  },
  {
    path:'offer',
    data: {
      title: 'offer',
      urls: [{title: 'offer', url: '/'},{title: 'offer'} ],
  
    },
    component:OfferComponent
  },
  {
    path:'coupan',
    data: {
      title: 'Coupan',
      urls: [{title: 'offer', url: '/'},{title: 'coupan'} ],
  
    },
    component:CoupanComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferRoutingModule { }
