import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaborlistComponent } from './saborlist.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('SaborlistComponent', () => {
  let component: SaborlistComponent;
  let fixture: ComponentFixture<SaborlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SaborlistComponent],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(SaborlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Teste 0 / Criou o componente', () => {
    expect(component).toBeTruthy();
  });
});
