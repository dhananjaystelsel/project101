import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { HeaderNavigationComponent } from '../shared/header-navigation/header-navigation.component';
import { BreadcrumbComponent } from '../shared/breadcrumb/breadcrumb.component';
import { TopBarComponent } from '../shared/top-bar/top-bar.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    HttpClientModule
  ],
  declarations: [
    PagesComponent,
    HeaderNavigationComponent,
    BreadcrumbComponent,
    TopBarComponent
  ]
})
export class PagesModule { }
