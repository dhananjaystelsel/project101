import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { UiSwitchModule } from 'ngx-ui-switch';//for switch button in angular 5

import { OfferRoutingModule } from './offer-routing.module';
import { OfferComponent } from './offer.component';
import { CoupanComponent } from './coupan/coupan.component';

@NgModule({
  imports: [
    CommonModule,
    OfferRoutingModule,
    FormsModule,
    UiSwitchModule
  ],
  declarations: [OfferComponent, CoupanComponent]
})
export class OfferModule { }
