
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
    {
        path: '', 
        loadChildren: './pages/pages.module#PagesModule',
        canActivate: [AuthGuard]
  }, 
    { path: 'login', loadChildren: './login/login.module#LoginModule'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes), NgbModule.forRoot()],
    exports: [RouterModule]
})
export class AppRoutingModule { }
