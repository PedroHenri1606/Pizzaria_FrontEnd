import { Component, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Endereco } from 'src/app/app/model/Endereco';
import { EnderecoService } from 'src/app/app/service/endereco/endereco.service';

@Component({
  selector: 'app-enderecolist',
  templateUrl: './enderecolist.component.html',
  styleUrls: ['./enderecolist.component.scss']
})
export class EnderecolistComponent {

  @Input() endereco: Endereco = new Endereco();
  @Output() modoLancamento: boolean = false;

  lista: Endereco[] = [];

  enderecoSelecionado!: Endereco;
  indiceSelecionado!: number;

  service = inject(EnderecoService);
  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  constructor(){
    this.listarTodos();
  }

  listarTodos(){
    this.service.listar().subscribe({
      next: endereco => {
        this.lista = endereco;
      },
      error: erro => {
        alert("Erro ao carregar os dados da lista de endereços!");
        console.log(erro);
      }
    });
  }

  adicionar(modal: any){
    this.enderecoSelecionado = new Endereco();
    this.indiceSelecionado = -1;
    this.modalRef = this.modalService.open(modal, {size : 'lg'});
  }

  buscarPorId(modal: any, id: number){
    this.service.buscarPorId(id).subscribe({
      next: endereco => {
        this.enderecoSelecionado = endereco;
      },
      error: erro => {
        alert("Erro ao buscar endereço por id, verifique se o dados informados são validos!");
        console.log(erro);
      }
    });
  }

  editar(modal: any, id: number, endereco: Endereco){
    this.indiceSelecionado = id;
    this.enderecoSelecionado = Object.assign({}, endereco);
    this.modalRef = this.modalService.open(modal, {size: 'lg'});
  }

  deletar(endereco: Endereco){
    this.service.deletar(endereco.id).subscribe(() =>
      this.listarTodos()
    );
  }

  adicionarOuEditar(endereco: Endereco){
    this.listarTodos();
    this.modalService.dismissAll();
  }
}
