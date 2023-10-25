import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Produto } from 'src/app/app/model/Produto';
import { ProdutoPedido } from 'src/app/app/model/ProdutoPedido';
import { Sabor } from 'src/app/app/model/Sabor';

@Component({
  selector: 'app-produto-pedidodetails',
  templateUrl: './produto-pedidodetails.component.html',
  styleUrls: ['./produto-pedidodetails.component.scss']
})
export class ProdutoPedidodetailsComponent {

  @Input() produtoPedido: ProdutoPedido = new ProdutoPedido();
  @Output() retorno = new EventEmitter<ProdutoPedido>();

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  lancarProduto(modal: any){
    this.modalRef = this.modalService.open(modal, {size: 'lg'});
  }

  lancarSabor(modal: any){
    this.modalRef = this.modalService.open(modal, {size: 'lg'});
  }

  retornoProdutoList(produto: Produto){
    if (this.produtoPedido.produto == null)

    this.produtoPedido.produto = produto;
    this.modalRef.dismiss();
    }

    retornoSaborList(sabor: Sabor){
      if (this.produtoPedido.sabores == null)
      this.produtoPedido.sabores = [];
  
      this.produtoPedido.sabores.push(sabor);
      this.modalRef.dismiss();
      }
}
