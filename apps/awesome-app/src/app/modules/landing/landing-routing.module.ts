import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
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
    component: LandingComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule {}
