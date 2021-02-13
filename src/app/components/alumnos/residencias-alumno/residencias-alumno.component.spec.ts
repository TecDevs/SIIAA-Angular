import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidenciasAlumnoComponent } from './residencias-alumno.component';

describe('ResidenciasAlumnoComponent', () => {
  let component: ResidenciasAlumnoComponent;
  let fixture: ComponentFixture<ResidenciasAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResidenciasAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidenciasAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
