import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitacionAsesorComponent } from './invitacion-asesor.component';

describe('InvitacionAsesorComponent', () => {
  let component: InvitacionAsesorComponent;
  let fixture: ComponentFixture<InvitacionAsesorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitacionAsesorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvitacionAsesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
