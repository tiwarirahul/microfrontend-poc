import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'app1',
    loadChildren: 'app/app-loaders/app1-loader.module#App1LoaderModule'
  },
  {
    path: 'app2',
    loadChildren: 'app/app-loaders/app2-loader.module#App2LoaderModule'
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
