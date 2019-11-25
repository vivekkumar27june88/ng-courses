import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../reducers';
import * as AuthActions from '../../modules/landing/reducers/auth.actions';

@Component({
  selector: 'ng-courses-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() menuIconClickEvent: EventEmitter<any>;

  constructor(private router: Router, private store: Store<AppState>) {
    this.menuIconClickEvent = new EventEmitter<any>();
  }

  ngOnInit() {}

  menuIconClickHandler() {
    console.log('clicked');
    this.menuIconClickEvent.emit();
  }

  public logoutBtnClickHandler(): void {
    window.sessionStorage.setItem('accessToken', '');
    this.store.dispatch(AuthActions.logout());
    this.router.navigate(['/landing/login']);
  }
}
