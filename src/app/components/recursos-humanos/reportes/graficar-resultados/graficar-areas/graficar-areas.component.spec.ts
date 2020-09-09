import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficarAreasComponent } from './graficar-areas.component';

describe('GraficarAreasComponent', () => {
  let component: GraficarAreasComponent;
  let fixture: ComponentFixture<GraficarAreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficarAreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficarAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
