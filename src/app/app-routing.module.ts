
import { AuthGuard } from '../modules/user/services/auth/guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { MainComponent } from './../pages/main/main.component';



const routes: Routes = [
  { path: 'main', component: MainComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
