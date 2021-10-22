import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarInteresComponent } from './actualizar-interes.component';

describe('ActualizarInteresComponent', () => {
  let component: ActualizarInteresComponent;
  let fixture: ComponentFixture<ActualizarInteresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarInteresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarInteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
