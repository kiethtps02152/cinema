import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRoutesComponent } from './home-routes.component';

describe('HomeRoutesComponent', () => {
  let component: HomeRoutesComponent;
  let fixture: ComponentFixture<HomeRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRoutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
