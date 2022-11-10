import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlquilerInmuebleComponent } from './alquiler-inmueble.component';

describe('AlquilerInmuebleComponent', () => {
  let component: AlquilerInmuebleComponent;
  let fixture: ComponentFixture<AlquilerInmuebleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlquilerInmuebleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlquilerInmuebleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
