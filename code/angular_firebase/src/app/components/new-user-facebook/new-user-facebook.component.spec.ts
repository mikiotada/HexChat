import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserFacebookComponent } from './new-user-facebook.component';

describe('NewUserFacebookComponent', () => {
  let component: NewUserFacebookComponent;
  let fixture: ComponentFixture<NewUserFacebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewUserFacebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
