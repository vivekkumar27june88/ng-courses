import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { MainframeComponent } from './components/mainframe/mainframe.component';
import { AuthGuard } from './modules/landing/services/auth.guard';

const routes: Routes = [
  {
    path: 'landing',
    // loadChildren: './modules/landing/landing.module#LandingModule'
    loadChildren: () =>
      import('./modules/landing/landing.module').then(mod => mod.LandingModule)
  },
  {
    path: '',
    component: MainframeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        canLoad: [AuthGuard],
        loadChildren: () =>
          import('./modules/account/account.module').then(
            mod => mod.AccountModule
          )
      },
      {
        path: 'account',
        loadChildren: () =>
          import('./modules/account/account.module').then(
            mod => mod.AccountModule
          )
      },
      {
        path: 'movies',
        loadChildren: () =>
          import('./modules/movies/movies.module').then(mod => mod.MoviesModule)
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/landing',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, /* { preloadingStrategy: PreloadAllModules } */)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
