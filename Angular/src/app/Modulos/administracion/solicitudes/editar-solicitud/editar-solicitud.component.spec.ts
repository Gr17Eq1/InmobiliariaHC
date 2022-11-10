import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSolicitudComponent } from './editar-solicitud.component';

describe('EditarSolicitudComponent', () => {
  let component: EditarSolicitudComponent;
  let fixture: ComponentFixture<EditarSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarSolicitudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
