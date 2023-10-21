import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Sabor } from 'src/app/app/model/Sabor';
import { SaborService } from 'src/app/app/service/sabor/sabor.service';

@Component({
  selector: 'app-saborlist',
  templateUrl: './saborlist.component.html',
  styleUrls: ['./saborlist.component.scss']
})
export class SaborlistComponent {

  
  modalService = inject(NgbModal);
  service = inject(SaborService);

  lista: Sabor[] = [];

  indiceSelecionado!: number;
  saborSelecionado!: Sabor;

  constructor(){
    this.listarTodos();
  }

  listarTodos(){
    this.service.listar().subscribe({
      next: lista => {
        this.lista = lista;
      },
      error: erro => {
        alert("Erro no ts sabor list!");
      }
    });
  }

  adicionar(modal: any){
    this.saborSelecionado = new Sabor();
    this.modalService.open(modal, {size: 'lg'});
  }

  editar(modal: any, id: number, produto: Sabor){
    this.indiceSelecionado = id;
    this.saborSelecionado = produto;
    this.modalService.open(modal, {size: 'lg'});
  }

  buscarPorId(modal: any, id: number){
    this.indiceSelecionado = id;
    this.saborSelecionado = this.lista[id -1];
    this.modalService.open(modal, {size: 'lg'});
  }

  deletar(produto: Sabor){
    this.service.deletar(produto.id).subscribe(() => {
      this.listarTodos();
    });
  }

  salvar(produto: Sabor){
    if(produto.id > 0){
      this.lista[this.indiceSelecionado] = produto;
    
    } else {
      this.lista.push(produto);
    }

    this.modalService.dismissAll();
    this.listarTodos();
  }
}
