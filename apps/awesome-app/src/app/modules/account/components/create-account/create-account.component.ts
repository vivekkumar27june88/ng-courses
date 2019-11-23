import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'ng-courses-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateAccountComponent implements OnInit {
  @ViewChild('createAccountForm', { static: true }) createAccountForm: NgForm;

  constructor() {}

  ngOnInit() {}

  hasLocalModification(): boolean {
    if (this.createAccountForm.touched && this.createAccountForm.dirty) {
      return true;
    } else {
      return false;
    }
  }
}
