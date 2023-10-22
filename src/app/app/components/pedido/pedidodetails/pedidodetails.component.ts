import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Pedido } from 'src/app/app/model/Pedido';
import { ProdutoPedido } from 'src/app/app/model/ProdutoPedido';
import { PedidoService } from 'src/app/app/service/pedido/pedido.service';

@Component({
  selector: 'app-pedidodetails',
  templateUrl: './pedidodetails.component.html',
  styleUrls: ['./pedidodetails.component.scss']
})
export class PedidodetailsComponent {

}
