import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainframeComponent } from './components/mainframe/mainframe.component';
import { AuthGuard } from './modules/landing/services/auth.guard';
import { CustomPreloadingStrategyService } from './services/custom-preloading-strategy.service';

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
        data: { preload: true },
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
    RouterModule.forRoot(
      routes,
      /* { preloadingStrategy: PreloadAllModules } */ {
        preloadingStrategy: CustomPreloadingStrategyService
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
