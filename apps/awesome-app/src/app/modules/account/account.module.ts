import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AccountRoutingModule } from './account-routing.module';
import { AccountListComponent } from './components/account-list/account-list.component';
import { DepartmentComponent } from './components/department/department.component';
import { EditAccountComponent } from './components/edit-account/edit-account.component';
import { UsersComponent } from './components/users/users.component';
import { AccountComponent } from './components/account/account.component';

@NgModule({
  declarations: [
    AccountListComponent,
    EditAccountComponent,
    UsersComponent,
    DepartmentComponent,
    AccountComponent
  ],
  imports: [CommonModule, AccountRoutingModule],
  exports: [DepartmentComponent, AccountComponent]
})
export class AccountModule {}
