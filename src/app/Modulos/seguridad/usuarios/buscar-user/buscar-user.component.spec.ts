import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarUserComponent } from './buscar-user.component';

describe('BuscarUserComponent', () => {
  let component: BuscarUserComponent;
  let fixture: ComponentFixture<BuscarUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscarUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
