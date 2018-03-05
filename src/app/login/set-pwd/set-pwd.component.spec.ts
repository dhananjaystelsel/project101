import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPwdComponent } from './set-pwd.component';

describe('SetPwdComponent', () => {
  let component: SetPwdComponent;
  let fixture: ComponentFixture<SetPwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetPwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
