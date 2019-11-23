import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-courses-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.scss']
})
export class AccountListComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  public addAccountBtnClickHandler(): void {
    this.router.navigate(['/account', 'create-account']);
  }
}
