import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestioncomidaComponent } from './gestioncomida.component';

describe('GestioncomidaComponent', () => {
  let component: GestioncomidaComponent;
  let fixture: ComponentFixture<GestioncomidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestioncomidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestioncomidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
