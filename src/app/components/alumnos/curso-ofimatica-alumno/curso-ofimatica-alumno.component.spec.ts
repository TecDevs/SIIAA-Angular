import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoOfimaticaAlumnoComponent } from './curso-ofimatica-alumno.component';

describe('CursoOfimaticaAlumnoComponent', () => {
  let component: CursoOfimaticaAlumnoComponent;
  let fixture: ComponentFixture<CursoOfimaticaAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoOfimaticaAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoOfimaticaAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
