import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Acompanhamento } from 'src/app/app/model/Acompanhamento';
import { Pedido } from 'src/app/app/model/Pedido';
import { Produto } from 'src/app/app/model/Produto';
import { PedidoService } from 'src/app/app/service/pedido/pedido.service';

@Component({
  selector: 'app-pedidodetails',
  templateUrl: './pedidodetails.component.html',
  styleUrls: ['./pedidodetails.component.scss']
})
export class PedidodetailsComponent {

  @Input() pedido: Pedido = new Pedido();
  @Output() retorno = new EventEmitter<Pedido>();

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  service = inject(PedidoService);

  constructor(){

  }

  salvar(){
    this.service.salvar(this.pedido).subscribe({
      next: pedido => {
        this.retorno.emit(pedido);
      },
      error: erro => {
        alert("Erro ao tentar cadastrar um novo pedido!");
        console.log(erro);
      }
    });
  }

  excluirProduto( indice: number){
    this.pedido.item.splice(indice,1);
  }

  excluirComplemento( indice: number){
    this.pedido.acompanhamento.splice(indice,1);
  }

  retornoProdutoList(produto: Produto){
    if (this.pedido.item == null)
      this.pedido.item = [];

    this.pedido.item.push(produto);
    this.modalRef.dismiss();
    }

    retornoAcompanhamentoList(acompanhamento: Acompanhamento){
      if (this.pedido.item == null)
        this.pedido.item = [];
  
      this.pedido.acompanhamento.push(acompanhamento);
      this.modalRef.dismiss();
      }

  lancarItens(modal: any){
    this.modalRef = this.modalService.open(modal, {size: 'lg'});
  }
}
