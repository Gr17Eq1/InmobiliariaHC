import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRolComponent } from './crear-rol.component';

describe('CrearRolComponent', () => {
  let component: CrearRolComponent;
  let fixture: ComponentFixture<CrearRolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearRolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearRolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
