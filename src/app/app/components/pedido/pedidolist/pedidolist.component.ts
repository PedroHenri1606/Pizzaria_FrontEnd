import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pedido } from 'src/app/app/model/Pedido';
import { PedidoService } from 'src/app/app/service/pedido/pedido.service';

@Component({
  selector: 'app-pedidolist',
  templateUrl: './pedidolist.component.html',
  styleUrls: ['./pedidolist.component.scss']
})
export class PedidolistComponent {

  modalService = inject(NgbModal);
  service = inject(PedidoService);

  lista: Pedido[] = [];

  indiceSelecionado!: number;
  pedidoSelecionado!: Pedido;

  constructor(){
    this.listarTodos();
  }

  listarTodos(){
    this.service.listar().subscribe({
      next: lista => {
        this.lista = lista;
      },
      error: erro => {
        alert("Erro de conexão com o banco de dados, verifique o funcionamento do servidor!");
      }
    });
  }

  adicionar(modal: any){
    this.pedidoSelecionado = new Pedido();
    this.modalService.open(modal, {size: 'lg'});
  }

  editar(modal: any, id: number, pedido: Pedido){
    this.indiceSelecionado = id;
    this.pedidoSelecionado = pedido;
    this.modalService.open(modal, {size: 'lg'});
  }

  buscarPorId(modal: any, id: number){
    this.pedidoSelecionado = this.lista[id - 1];
    this.indiceSelecionado = id;
    this.modalService.open(modal, {size: 'lg'});
  }

  salvar(pedido: Pedido){
    if(pedido.id > 0){
      this.lista[this.indiceSelecionado] = pedido;

    } else {
      this.lista.push(pedido);
    }

    this.modalService.dismissAll();
    this.listarTodos();
  }
}
