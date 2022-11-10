import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentaInmuebleComponent } from './venta-inmueble.component';

describe('VentaInmuebleComponent', () => {
  let component: VentaInmuebleComponent;
  let fixture: ComponentFixture<VentaInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentaInmuebleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentaInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
