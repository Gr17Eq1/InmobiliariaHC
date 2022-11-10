import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarSolicitudComponent } from './eliminar-solicitud.component';

describe('EliminarSolicitudComponent', () => {
  let component: EliminarSolicitudComponent;
  let fixture: ComponentFixture<EliminarSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarSolicitudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
