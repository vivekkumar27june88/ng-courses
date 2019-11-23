import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-courses-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() menuIconClickEvent: EventEmitter<any>;

  constructor(private router: Router) {
    this.menuIconClickEvent = new EventEmitter<any>();
  }

  ngOnInit() {}

  menuIconClickHandler() {
    console.log('clicked');
    this.menuIconClickEvent.emit();
  }

  public logoutBtnClickHandler(): void {
    window.sessionStorage.setItem('accessToken', '');
    this.router.navigate(['/login']);
  }
}
