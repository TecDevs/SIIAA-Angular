import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPorTokenComponent } from './registro-por-token.component';

describe('RegistroPorTokenComponent', () => {
  let component: RegistroPorTokenComponent;
  let fixture: ComponentFixture<RegistroPorTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroPorTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPorTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
