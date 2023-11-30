import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientelistComponent } from './clientelist.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('ClientelistComponent', () => {
  let component: ClientelistComponent;
  let fixture: ComponentFixture<ClientelistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientelistComponent],
      imports: [HttpClientTestingModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
      ]
    });
    fixture = TestBed.createComponent(ClientelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Teste 0 / Criou o componente', () => {
    expect(component).toBeTruthy();
  });
});
