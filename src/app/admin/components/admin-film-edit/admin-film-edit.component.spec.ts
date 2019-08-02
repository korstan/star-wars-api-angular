import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFilmEditComponent } from './admin-film-edit.component';

describe('AdminFilmEditComponent', () => {
  let component: AdminFilmEditComponent;
  let fixture: ComponentFixture<AdminFilmEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminFilmEditComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFilmEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
