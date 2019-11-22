import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModuleImportModule } from '../material-module-import/material-module-import.module';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [LandingComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    MaterialModuleImportModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [LandingComponent]
})
export class LandingModule {}
