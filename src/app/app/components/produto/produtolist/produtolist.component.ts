import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Produto } from 'src/app/app/model/Produto';
import { ProdutoService } from 'src/app/app/service/produto/produto.service';

@Component({
  selector: 'app-produtolist',
  templateUrl: './produtolist.component.html',
  styleUrls: ['./produtolist.component.scss']
})
export class ProdutolistComponent {

  modalService = inject(NgbModal);
  service = inject(ProdutoService);

  lista: Produto[] = [];

  indiceSelecionado!: number;
  produtoSelecionado!: Produto;

  constructor(){
    this.listarTodos();
  }

  listarTodos(){
    this.service.listar().subscribe({
      next: lista => {
        this.lista = lista;
      },
      error: erro => {
        alert("Erro no ts produto list!");
      }
    });
  }

  adicionar(modal: any){
    this.produtoSelecionado = new Produto();
    this.modalService.open(modal, {size: 'lg'});
  }

  editar(modal: any, id: number, produto: Produto){
    this.indiceSelecionado = id;
    this.produtoSelecionado = produto;
    this.modalService.open(modal, {size: 'lg'});
  }

  buscarPorId(modal: any, id: number){
    this.indiceSelecionado = id;
    this.produtoSelecionado = this.lista[id -1];
    this.modalService.open(modal, {size: 'lg'});
  }

  deletar(produto: Produto){
    this.service.deletar(produto.id).subscribe(() => {
      this.listarTodos();
    });
  }

  salvar(produto: Produto){
    if(produto.id > 0){
      this.lista[this.indiceSelecionado] = produto;
    
    } else {
      this.lista.push(produto);
    }

    this.modalService.dismissAll();
    this.listarTodos();
  }
}
