import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialModuleImportModule } from '../material-module-import/material-module-import.module';
import { AccountRoutingModule } from './account-routing.module';
import { AccountListComponent } from './components/account-list/account-list.component';
import { AccountComponent } from './components/account/account.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { DepartmentComponent } from './components/department/department.component';
import { EditAccountComponent } from './components/edit-account/edit-account.component';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    AccountListComponent,
    EditAccountComponent,
    UsersComponent,
    DepartmentComponent,
    AccountComponent,
    CreateAccountComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    MaterialModuleImportModule,
    FormsModule
  ],
  exports: [DepartmentComponent, AccountComponent]
})
export class AccountModule {}
