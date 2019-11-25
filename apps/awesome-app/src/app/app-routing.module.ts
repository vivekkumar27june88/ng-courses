import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { MainframeComponent } from './components/mainframe/mainframe.component';
import { AuthGuard } from './modules/landing/services/auth.guard';
import { CustomPreloadingStrategyService } from './services/custom-preloading-strategy.service';
import { LoginComponent } from './modules/landing/login/login.component';
import { RegisterComponent } from './modules/landing/register/register.component';
import { LandingComponent } from './modules/landing/landing/landing.component';

const routes: Routes = [
  /* {
    path: 'landing',
    // loadChildren: './modules/landing/landing.module#LandingModule'
    loadChildren: () =>
      import('./modules/landing/landing.module').then(mod => mod.LandingModule)
  }, */
  {
    path: 'landing/login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'landing/register',
    component: RegisterComponent,
    pathMatch: 'full'
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: '',
    component: MainframeComponent,
    children: [
      {
        path: 'dashboard',
        // canLoad: [AuthGuard],
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./modules/account/account.module').then(
            mod => mod.AccountModule
          )
      },
      {
        path: 'account',
        data: { preload: true },
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./modules/account/account.module').then(
            mod => mod.AccountModule
          )
      },
      {
        path: 'movies',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./modules/movies/movies.module').then(mod => mod.MoviesModule)
      }
    ]
  }
  /* {
    path: '**',
    redirectTo: 'landing',
    pathMatch: 'full'
  } */
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { preloadingStrategy: PreloadAllModules }
      /* {preloadingStrategy: CustomPreloadingStrategyService} */
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
