import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacomidaComponent } from './listacomida.component';

describe('ListacomidaComponent', () => {
  let component: ListacomidaComponent;
  let fixture: ComponentFixture<ListacomidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListacomidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacomidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
