import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-courses-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  public loginBtnClickHandler(): void {
    this.router.navigate(['/landing', 'login']);
  }

  public registerBtnClickHandler(): void {
    this.router.navigate(['/landing', 'register']);
  }
}
