import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtraescolaresAlumnoComponent } from './extraescolares-alumno.component';

describe('ExtraescolaresAlumnoComponent', () => {
  let component: ExtraescolaresAlumnoComponent;
  let fixture: ComponentFixture<ExtraescolaresAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtraescolaresAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtraescolaresAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
