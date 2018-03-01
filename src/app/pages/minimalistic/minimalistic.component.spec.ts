import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinimalisticComponent } from './minimalistic.component';

describe('MinimalisticComponent', () => {
  let component: MinimalisticComponent;
  let fixture: ComponentFixture<MinimalisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinimalisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinimalisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
