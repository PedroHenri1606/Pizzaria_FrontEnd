import { Component, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Cliente } from 'src/app/app/model/Cliente';
import { ClienteService } from 'src/app/app/service/cliente/cliente.service';


@Component({
  selector: 'app-clientelist',
  templateUrl: './clientelist.component.html',
  styleUrls: ['./clientelist.component.scss']
})
export class ClientelistComponent {

  lista: Cliente[] = [];

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  service = inject(ClienteService);

  indiceSelecionado!: number;
  clienteSelecionado!: Cliente;

  constructor(){

  }

  listarTodos(){
    this.service.listar().subscribe({
      next: lista => {
        this.lista = lista;
      },
      error: erro => {
        alert("Erro ao carregar dados da lista!");
        console.log(erro);
      }
    });
  }

  buscarPorId(modal: any, id: number){
    this.service.buscarPorId(id).subscribe({
      next: cliente => {
        this.clienteSelecionado = cliente;
        this.modalRef = this.modalService.open(modal, {size: 'lg'});

      },
      error: erro => {
        alert("Erro ao buscar cliente por Id, verifique se o dado informado é valido!");
        console.log(erro);
      }
    });
  }

  salvar(modal: any){
    this.clienteSelecionado = new Cliente();
    this.indiceSelecionado = -1;
    this.modalRef = this.modalService.open(modal, {size: 'lg'});
  }

  editar(modal: any, id: number, cliente: Cliente){
    this.clienteSelecionado = Object.assign({}, cliente);
    this.indiceSelecionado = id;
    this.modalRef = this.modalService.open(modal, {size: 'lg'});
  }

  deletar(cliente: Cliente){
    this.service.deletar(cliente.id).subscribe(() =>
      this.listarTodos()
    );
  }

  adicionarOuEditar(cliente: Cliente){
    this.listarTodos();
    this.modalService.dismissAll();
  }
}
