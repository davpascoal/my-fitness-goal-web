import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

enum AppRoute {
  HOME = '/',
}

export const views: Routes = [
  {
    path: 'workouts',
    loadChildren: () => import('./views/workouts/workouts-routing.module').then(m => m.WorkoutsRoutingModule),
    data: {
      name: 'Workouts'
    },
  },
];

const routes: Routes = [
  ...views,
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./views/home/home-routing.module').then(m => m.HomeRoutingModule),
    data: {
      name: 'Home'
    }
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
