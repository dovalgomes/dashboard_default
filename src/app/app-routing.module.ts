
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './../pages/login/login.component';
import { MainComponent } from './../pages/main/main.component';
import { AdminComponent } from './../pages/admin/admin.component';



import { AuthGuard } from '../services/guards/auth.guard';
import { AdminGuard } from './../services/guards/admin.guard';


const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'login', component: AdminComponent, pathMatch: 'full' },
  { path: 'main', component: AdminComponent, pathMatch: 'full', canActivate: [AuthGuard] },
  { path: 'admin', component: AdminComponent, pathMatch: 'full', canActivate: [AuthGuard, AdminGuard] }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
