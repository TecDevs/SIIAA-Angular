import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicioAlumnoComponent } from './servicio-alumno.component';

describe('ServicioAlumnoComponent', () => {
  let component: ServicioAlumnoComponent;
  let fixture: ComponentFixture<ServicioAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicioAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicioAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
