import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarRolComponent } from './eliminar-rol.component';

describe('EliminarRolComponent', () => {
  let component: EliminarRolComponent;
  let fixture: ComponentFixture<EliminarRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarRolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
