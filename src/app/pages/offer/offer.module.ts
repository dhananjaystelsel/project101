import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { UiSwitchModule } from 'ngx-ui-switch';//for switch button in angular 5
import { DataTablesModule } from 'angular-datatables';
import { OfferRoutingModule } from './offer-routing.module';
import { OfferComponent } from './offer.component';
import { CoupanComponent } from './coupan/coupan.component';
import { HttpClientModule } from '@angular/common/http';
 import { HttpModule } from '@angular/http';
import { ApiService } from "../../services/api.services";

@NgModule({
  imports: [
    CommonModule,
    OfferRoutingModule,
    FormsModule,
    UiSwitchModule,
    DataTablesModule,
    HttpClientModule,HttpModule
  ],
  declarations: [OfferComponent, CoupanComponent],
  providers:[ApiService]
})
export class OfferModule { }
