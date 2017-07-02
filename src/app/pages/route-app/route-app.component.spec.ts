import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteAppComponent } from './route-app.component';

describe('RouteAppComponent', () => {
  let component: RouteAppComponent;
  let fixture: ComponentFixture<RouteAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
