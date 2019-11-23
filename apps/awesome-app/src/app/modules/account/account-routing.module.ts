import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountListComponent } from './components/account-list/account-list.component';
import { AccountComponent } from './components/account/account.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { DepartmentComponent } from './components/department/department.component';
import { UsersComponent } from './components/users/users.component';
import { AccountCreateGuard } from './services/account-create.guard';

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
        path: 'create-account',
        component: CreateAccountComponent,
        canDeactivate: [AccountCreateGuard]
      },
      {
        path: 'department',
        component: DepartmentComponent
      },
      {
        path: 'user',
        component: UsersComponent
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {}
