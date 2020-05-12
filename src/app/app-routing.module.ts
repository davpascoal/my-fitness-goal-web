import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './views/home/home.module';
import { HomeComponent } from './views/home/home.component';

enum AppRoute {
  HOME = '/',
}

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./views/home/home-routing.module').then(m => m.HomeRoutingModule),
  },
  {
    path: '**',
    redirectTo: AppRoute.HOME,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
