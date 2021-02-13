import { TestBed } from '@angular/core/testing';

import { CerrarSesionService } from './cerrar-sesion.service';

describe('CerrarSesionService', () => {
  let service: CerrarSesionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CerrarSesionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
