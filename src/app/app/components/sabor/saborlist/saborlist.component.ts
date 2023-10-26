import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Sabor } from 'src/app/app/model/Sabor';
import { SaborService } from 'src/app/app/service/sabor/sabor.service';

@Component({
  selector: 'app-saborlist',
  templateUrl: './saborlist.component.html',
  styleUrls: ['./saborlist.component.scss']
})
export class SaborlistComponent {

  lista: Sabor[] = [];

  @Input() modoLancamento: boolean = false;
  @Output() retorno = new EventEmitter<Sabor>;

  indiceSelecionado!: number;
  saborSelecionado!: Sabor;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  service = inject(SaborService);

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

  salvar(modal: any){
    this.saborSelecionado = new Sabor();
    this.indiceSelecionado = -1;
    this.modalRef = this.modalService.open(modal, {size: 'lg'});
  }

  buscarPorId(modal: any, id: number){
    this.service.buscarPorId(id).subscribe({
      next: sabor => {
        this.saborSelecionado = sabor;
        this.modalRef = this.modalService.open(modal, {size: 'lg'});
      },
      error: erro => {
        alert("Erro ao buscar por id, verifique se o dado informado é valido!");
        console.log(erro);
      }
    });
  }

  editar(modal: any, id: number, sabor: Sabor){
    this.saborSelecionado = Object.assign({}, sabor);
    this.indiceSelecionado = id;
    this.modalRef = this.modalService.open(modal, {size: 'lg'});
  }

  deletar(sabor: Sabor){
    this.service.deletar(sabor.id).subscribe(() =>
      this.listarTodos()
    );
  }

  adicionarOuEditar(sabor: Sabor){
    this.listarTodos();
    this.modalRef.dismiss();
  }

  lancamento(sabor: Sabor){
    this.retorno.emit(sabor);
  }
}
