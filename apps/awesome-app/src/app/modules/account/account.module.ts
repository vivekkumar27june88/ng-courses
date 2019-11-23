import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountListComponent } from './components/account-list/account-list.component';
import { EditAccountComponent } from './components/edit-account/edit-account.component';
import { DeaprtmentComponent } from './components/deaprtment/deaprtment.component';
import { UsersComponent } from './components/users/users.component';


@NgModule({
  declarations: [AccountListComponent, EditAccountComponent, DeaprtmentComponent, UsersComponent],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
