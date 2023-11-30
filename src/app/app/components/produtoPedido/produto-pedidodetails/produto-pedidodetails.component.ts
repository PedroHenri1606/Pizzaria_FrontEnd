import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ProdutoPedido } from '../../../model/produtoPedido/ProdutoPedido';
import { ProdutoPedidoService } from '../../../service/produto-pedido/produto-pedido.service';
import { Produto } from '../../../model/produto/Produto';
import { Sabor } from '../../../model/sabor/Sabor';


@Component({
  selector: 'app-produto-pedidodetails',
  templateUrl: './produto-pedidodetails.component.html',
  styleUrls: ['./produto-pedidodetails.component.scss']
})
export class ProdutoPedidodetailsComponent {

  @Input() produtoPedido: ProdutoPedido = new ProdutoPedido();
  @Output() retorno = new EventEmitter<ProdutoPedido>();

  service = inject(ProdutoPedidoService);
  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  @Input() nomeProduto!: String;

  salvar(){
    this.service.salvar(this.produtoPedido).subscribe({
      next: produtoPedido => {
        this.retorno.emit(produtoPedido);
      },
      error: erro => {
        alert("Erro ao tentar cadastrar um novo pedido!");
        console.log(erro);
      }
    });
  }

  lancarProduto(modal: any){
    this.modalRef = this.modalService.open(modal, {size: 'lg'});
  }

  excluirSabor(indice: number){
    this.produtoPedido.sabores.splice(indice,1);
  }

  lancarSabor(modal: any){
    this.modalRef = this.modalService.open(modal, {size: 'lg'});
  }

  retornoProdutoList(produto: Produto){
    if (this.produtoPedido.produto == null)

    this.produtoPedido.produto = produto;
    this.nomeProduto = produto.descricao;
    console.log(produto.id);
    this.modalRef.dismiss();
    }

    retornoSaborList(sabor: Sabor){
      if (this.produtoPedido.sabores == null)
      this.produtoPedido.sabores = [];
  
      this.produtoPedido.sabores.push(sabor);
      this.modalRef.dismiss();
      }
}
