import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidolistComponent } from './pedidolist.component';

describe('PedidolistComponent', () => {
  let component: PedidolistComponent;
  let fixture: ComponentFixture<PedidolistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidolistComponent]
    });
    fixture = TestBed.createComponent(PedidolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
