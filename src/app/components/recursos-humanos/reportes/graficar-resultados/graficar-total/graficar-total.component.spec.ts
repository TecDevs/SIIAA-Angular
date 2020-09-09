import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficarTotalComponent } from './graficar-total.component';

describe('GraficarTotalComponent', () => {
  let component: GraficarTotalComponent;
  let fixture: ComponentFixture<GraficarTotalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficarTotalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficarTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
