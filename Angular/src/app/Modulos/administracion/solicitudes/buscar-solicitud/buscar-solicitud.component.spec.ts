import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarSolicitudComponent } from './buscar-solicitud.component';

describe('BuscarSolicitudComponent', () => {
  let component: BuscarSolicitudComponent;
  let fixture: ComponentFixture<BuscarSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarSolicitudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
