import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFilmsPageComponent } from './admin-films-page.component';

describe('AdminFilmsPageComponent', () => {
  let component: AdminFilmsPageComponent;
  let fixture: ComponentFixture<AdminFilmsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFilmsPageComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFilmsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
