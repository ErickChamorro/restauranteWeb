import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListabebidaComponent } from './listabebida.component';

describe('ListabebidaComponent', () => {
  let component: ListabebidaComponent;
  let fixture: ComponentFixture<ListabebidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListabebidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListabebidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
