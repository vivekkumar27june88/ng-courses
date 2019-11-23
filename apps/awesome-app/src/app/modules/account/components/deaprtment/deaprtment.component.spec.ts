import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeaprtmentComponent } from './deaprtment.component';

describe('DeaprtmentComponent', () => {
  let component: DeaprtmentComponent;
  let fixture: ComponentFixture<DeaprtmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeaprtmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeaprtmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
