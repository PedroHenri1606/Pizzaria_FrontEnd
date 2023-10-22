import { Component, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Produto } from 'src/app/app/model/Produto';
import { ProdutoService } from 'src/app/app/service/produto/produto.service';

@Component({
  selector: 'app-produtolist',
  templateUrl: './produtolist.component.html',
  styleUrls: ['./produtolist.component.scss']
})
export class ProdutolistComponent {

  lista: Produto[] = [];

  indiceSelecionado!: number;
  produtoSelecionado!: Produto;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  service = inject(ProdutoService);

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
      next: produto => {
        this.produtoSelecionado = produto;
        this.modalRef = this.modalService.open(modal, {size: 'lg'});

      }, 
      error: erro => {
        alert("Erro ao buscar por Id, verifique se o dado informado é valido!");
        console.log(erro);
      }
    });
  }

  salvar(modal: any){
    this.produtoSelecionado = new Produto();
    this.indiceSelecionado = -1;
    this.modalRef = this.modalService.open(modal, {size: 'lg'});
  }

  editar(modal: any, id: number, produto: Produto){
    this.produtoSelecionado = Object.assign({}, produto);
    this.indiceSelecionado = id;
    this.modalRef = this.modalService.open(modal, {size: 'lg'});
  }

  deletar(produto: Produto){
    this.service.deletar(produto.id).subscribe(() =>
      this.listarTodos()
    );
  }

  adicionarOuEditar(produto: Produto){
    this.listarTodos();
    this.modalService.dismissAll();
  }
}
