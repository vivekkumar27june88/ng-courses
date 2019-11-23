import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-courses-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  openInSecondaryOutlet() {
    this.router.navigate([
      {
        outlets: {
          // primary: ['/movies', 'featured-movies']
          // details: ['details']
        }
      }
    ]);
  }
}
