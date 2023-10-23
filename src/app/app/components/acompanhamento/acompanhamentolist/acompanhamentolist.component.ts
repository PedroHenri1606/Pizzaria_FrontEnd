import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Acompanhamento } from 'src/app/app/model/Acompanhamento';
import { AcompanhamentoService } from 'src/app/app/service/acompanhamento/acompanhamento.service';


@Component({
  selector: 'app-acompanhamentolist',
  templateUrl: './acompanhamentolist.component.html',
  styleUrls: ['./acompanhamentolist.component.scss']
})
export class AcompanhamentolistComponent {

  lista: Acompanhamento[] = [];

  @Output() retorno = new EventEmitter<Acompanhamento>();
  @Input() modoLancamento: boolean = false;

  acompanhamentoSelecionado!: Acompanhamento;
  indiceSelecionado!: number;
  
  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  service = inject(AcompanhamentoService);

  constructor(){
    this.listarTodos();
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
      next: acompanhamento => {
        this.acompanhamentoSelecionado = acompanhamento;
        this.modalRef = this.modalService.open(modal, {size: 'lg'});
      },
      error: erro => {
        alert("Error ao buscar por id, verifique se o dado informado é valido!");
        console.log(erro);
      }
    });
  }

  adicionar(modal: any){
    this.acompanhamentoSelecionado = new Acompanhamento();
    this.indiceSelecionado = -1;
    this.modalRef = this.modalService.open(modal, {size: 'lg'});
  }

  editar(modal: any, indice: number, acompanhamento: Acompanhamento){
    this.acompanhamentoSelecionado = Object.assign({}, acompanhamento);
    this.indiceSelecionado = indice;
    this.modalRef = this.modalService.open(modal, {size: 'lg'});
  }

  deletar(acompanhamento: Acompanhamento){
    this.service.deletar(acompanhamento.id).subscribe(() =>
      this.listarTodos()
    );
  }

  adicionarOuEditar(acompanhamento: Acompanhamento){
    this.listarTodos();
    this.modalService.dismissAll();
  }

  lancamento(produto: Acompanhamento){
    this.retorno.emit(produto);
  }
}
