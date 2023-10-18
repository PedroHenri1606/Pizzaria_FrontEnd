import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PedidodetailsComponent } from './pedidodetails.component';

describe('PedidodetailsComponent', () => {
  let component: PedidodetailsComponent;
  let fixture: ComponentFixture<PedidodetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PedidodetailsComponent]
    });
    fixture = TestBed.createComponent(PedidodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
