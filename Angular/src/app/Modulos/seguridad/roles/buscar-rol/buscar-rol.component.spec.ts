import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarRolComponent } from './buscar-rol.component';

describe('BuscarRolComponent', () => {
  let component: BuscarRolComponent;
  let fixture: ComponentFixture<BuscarRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarRolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
