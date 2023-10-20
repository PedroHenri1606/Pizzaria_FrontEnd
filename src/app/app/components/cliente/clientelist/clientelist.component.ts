import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/app/model/Cliente';
import { ClienteService } from 'src/app/app/service/cliente/cliente.service';

@Component({
  selector: 'app-clientelist',
  templateUrl: './clientelist.component.html',
  styleUrls: ['./clientelist.component.scss']
})
export class ClientelistComponent {

  modalService = inject(NgbModal);
  service = inject(ClienteService);

  lista: Cliente[] = [];

  indiceSelecionado!: number;
  clienteSelecionado!: Cliente;

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
    this.clienteSelecionado = new Cliente();
    this.modalService.open(modal, {size: 'lg'});
  }

  editar(modal: any, cliente: Cliente, id: number){
    this.indiceSelecionado = id;
    this.clienteSelecionado = cliente;
    this.modalService.open(modal, {size: 'lg'});
  }

  buscarPorId(modal: any, id: number){
    this.clienteSelecionado = this.lista[id - 1];
    this.indiceSelecionado = id;
    this.modalService.open(modal, {size: 'lg'});
  }

  deletar(cliente: Cliente){
    this.service.deletar(cliente.id).subscribe(() =>
    {
      this.listarTodos();
    });
  }

  salvar(cliente: Cliente){
    if(cliente.id > 0){
      this.lista[this.indiceSelecionado] = cliente;

    } else {
      this.lista.push(cliente);
    }

    this.modalService.dismissAll();
    this.listarTodos();
  }
}
