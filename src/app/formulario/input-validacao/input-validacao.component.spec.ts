import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputValidacaoComponent } from './input-validacao.component';

describe('InputValidacaoComponent', () => {
  let component: InputValidacaoComponent;
  let fixture: ComponentFixture<InputValidacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputValidacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputValidacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
