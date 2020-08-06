import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficarResultadosComponent } from './graficar-resultados.component';

describe('GraficarResultadosComponent', () => {
  let component: GraficarResultadosComponent;
  let fixture: ComponentFixture<GraficarResultadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficarResultadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficarResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
