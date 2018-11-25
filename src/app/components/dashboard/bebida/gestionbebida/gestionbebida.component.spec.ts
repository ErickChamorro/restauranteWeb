import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionbebidaComponent } from './gestionbebida.component';

describe('GestionbebidaComponent', () => {
  let component: GestionbebidaComponent;
  let fixture: ComponentFixture<GestionbebidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionbebidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionbebidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
