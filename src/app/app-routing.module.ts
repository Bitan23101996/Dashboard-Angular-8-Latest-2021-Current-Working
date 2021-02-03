import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: 'src/app/modules/dashboard/dashboard.module#DashboardModule'   
  },
  {
    path: 'form',
    loadChildren: 'src/app/modules/profile/profile.module#ProfileModule'
  },
  {
    path: 'submenu',
    loadChildren: 'src/app/modules/news/news.module#NewsModule'
  },
  {
    path: 'submenu2',
    loadChildren: 'src/app/modules/training/training.module#TrainingModule',
  },

  {
    path: "404",
    loadChildren: 'src/app/modules/not-found/not-found.module#NotFoundModule',
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
