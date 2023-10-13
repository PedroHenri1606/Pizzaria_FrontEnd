import { TestBed } from '@angular/core/testing';

import { ProdutoPedidoService } from './produto-pedido.service';

describe('ProdutoPedidoService', () => {
  let service: ProdutoPedidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutoPedidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
