import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescargarResultadosComponent } from './descargar-resultados.component';

describe('DescargarResultadosComponent', () => {
  let component: DescargarResultadosComponent;
  let fixture: ComponentFixture<DescargarResultadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescargarResultadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescargarResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
