import { Component, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Pedido } from '../../../model/pedido/Pedido';
import { PedidoService } from '../../../service/pedido/pedido.service';

@Component({
  selector: 'app-pedidolist',
  templateUrl: './pedidolist.component.html',
  styleUrls: ['./pedidolist.component.scss']
})
export class PedidolistComponent {

  lista: Pedido[] = [];

  pedidoSelecionado: Pedido = new Pedido();
  indiceSelecionado!: number;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  service = inject(PedidoService);

  constructor(){
    this.listarTodos();
  }

  listarTodos(){
    this.service.listar().subscribe({
      next: lista => {
        this.lista = lista;
      },
      error: erro => {
        alert("Erro ao carregar os dados da lista!");
        console.log(erro);
      }
    });
  }

  buscarPorId(modal: any, id: number){
    this.service.buscarPorId(id).subscribe({
      next: pedido => {
        this.pedidoSelecionado = pedido;
        this.modalRef = this.modalService.open(modal, {size: 'lg'});
      },
      error: erro => {
        alert("Erro ao tentar buscar por id, verifique se os dados informados são validos!");
        console.log(erro);
      }
    });
  }

  adicionar(modal: any){
    this.pedidoSelecionado = new Pedido();
    this.indiceSelecionado = -1;
    this.modalRef = this.modalService.open(modal, {size: 'lg'});
  }

  editar(modal: any, id: number, pedido: Pedido){
    this.pedidoSelecionado = Object.assign({}, pedido);
    this.indiceSelecionado = id;
    this.modalRef = this.modalService.open(modal, {size: 'lg'});
  }

  adicionarOuEditar(pedido: Pedido){
    this.listarTodos();
    this.modalService.dismissAll();
  }
}
