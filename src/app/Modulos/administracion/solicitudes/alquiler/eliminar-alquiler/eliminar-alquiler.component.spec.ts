import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarAlquilerComponent } from './eliminar-alquiler.component';

describe('EliminarAlquilerComponent', () => {
  let component: EliminarAlquilerComponent;
  let fixture: ComponentFixture<EliminarAlquilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarAlquilerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarAlquilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
