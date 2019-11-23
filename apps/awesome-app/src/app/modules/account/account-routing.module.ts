import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountListComponent } from './components/account-list/account-list.component';

import { UsersComponent } from './components/users/users.component';
import { DepartmentComponent } from './components/department/department.component';
import { AccountComponent } from './components/account/account.component';

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: 'list',
        component: AccountListComponent
      },
      {
        path: 'department',
        component: DepartmentComponent
      },
      {
        path: 'user',
        component: UsersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {}
