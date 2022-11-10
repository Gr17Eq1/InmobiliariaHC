import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarVentaComponent } from './eliminar-venta.component';

describe('EliminarVentaComponent', () => {
  let component: EliminarVentaComponent;
  let fixture: ComponentFixture<EliminarVentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarVentaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
