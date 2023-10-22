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

  @Input() pedido: Pedido = new Pedido();
  @Output() retorno = new EventEmitter<Pedido>();

  service = inject(PedidoService);

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  constructor(){}

  cadastrar(){
    this.service.salvar(this.pedido).subscribe({
      next: pedido => {
        this.retorno.emit(pedido);
      },
      error: erro => {
        alert("Erro no envio dos dados, por favor revise o preenchimento dos cambos e informações presentes!");
      }
    })
  }

  excluir(produtoPedido: ProdutoPedido, indice: number){
    this.pedido.item.splice(indice,1);
  }

  retornoProdutoPedidoList(produtoPedido: ProdutoPedido){
    
    if(this.pedido.item == null){
      this.pedido.item = [];

      this.pedido.item.push(produtoPedido);
      this.modalRef.dismiss();
    }
  }

  lancar(modal: any){
    this.modalRef = this.modalService.open(modal, {size: 'lg'});
  }
}
