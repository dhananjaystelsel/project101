import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanSuperAdminComponent } from './plan-super-admin.component';

describe('PlanSuperAdminComponent', () => {
  let component: PlanSuperAdminComponent;
  let fixture: ComponentFixture<PlanSuperAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanSuperAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanSuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
