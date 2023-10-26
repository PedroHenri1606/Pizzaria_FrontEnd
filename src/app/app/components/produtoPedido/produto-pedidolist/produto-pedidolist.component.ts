import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ProdutoPedido } from 'src/app/app/model/ProdutoPedido';
import { ProdutoPedidoService } from 'src/app/app/service/produto-pedido/produto-pedido.service';

@Component({
  selector: 'app-produto-pedidolist',
  templateUrl: './produto-pedidolist.component.html',
  styleUrls: ['./produto-pedidolist.component.scss']
})
export class ProdutoPedidolistComponent {

  lista: ProdutoPedido[] = [];

  @Input() modoLancamento: boolean = false;
  @Output() retorno = new EventEmitter<ProdutoPedido>();

  indiceSelecionado!: number;
  produtoPedidoSelecionado: ProdutoPedido = new ProdutoPedido();

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  service = inject(ProdutoPedidoService);

  constructor(){
    this.listarTodos();
  }

  listarTodos(){
    this.service.listar().subscribe({
      next: lista => {
        this.lista = lista;
      },
      error: erro => {
        alert("Erro ao efetuar listagem de ProdutoPedido!");
        console.log(erro);
      }
    });
  }

  buscarPorId(id: number){
    this.service.buscarPorId(id).subscribe({
      next: produtoPedido => {
        this.produtoPedidoSelecionado = produtoPedido;
      },
      error: erro => {
        alert("Erro ao buscar por id!");
        console.log(erro);
      }
    });
  }

  cadastrar(modal: any){
    this.produtoPedidoSelecionado = new ProdutoPedido();
    this.indiceSelecionado = -1;
    this.modalRef = this.modalService.open(modal, {size: 'lg'});
  }

  editar(modal: any, id: number, produtoPedido: ProdutoPedido){
    this.produtoPedidoSelecionado = Object.assign({}, produtoPedido);
    this.indiceSelecionado = id;
    this.modalRef = this.modalService.open(modal, {size: 'lg'});
  }

  
}
