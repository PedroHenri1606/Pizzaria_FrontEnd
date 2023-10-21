import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Acompanhamento } from 'src/app/app/model/Acompanhamento';
import { AcompanhamentoService } from 'src/app/app/service/acompanhamento/acompanhamento.service';

@Component({
  selector: 'app-acompanhamentolist',
  templateUrl: './acompanhamentolist.component.html',
  styleUrls: ['./acompanhamentolist.component.scss']
})
export class AcompanhamentolistComponent {

  modalService = inject(NgbModal);
  service = inject(AcompanhamentoService);

  lista: Acompanhamento[] = [];

  indiceSelecionado!: number;
  acompanhamentoSelecionado!: Acompanhamento;

  constructor(){
    this.listarTodos();
  }

  listarTodos(){
    this.service.listar().subscribe({
      next: lista => {
        this.lista = lista;
      },
      error: erro => {
        alert("Erro no Acompanhamento List!");
        console.log(erro);
      }
    });
  }

  adicionar(modal: any){
    this.acompanhamentoSelecionado = new Acompanhamento;
    this.modalService.open(modal, {size: 'lg'});
  }

  editar(modal: any, id: number, acompanhamento: Acompanhamento){
    this.indiceSelecionado = id;
    this.acompanhamentoSelecionado = acompanhamento;
    this.modalService.open(modal, {size: 'lg'});
  }

  buscarPorId(modal: any, id: number){
    this.indiceSelecionado = id;
    this.acompanhamentoSelecionado = this.lista[id - 1];
    this.modalService.open(modal, {size: 'lg'});
  }

  deletar(acompanhamento: Acompanhamento){
    this.service.deletar(acompanhamento.id).subscribe( () =>
    {
      this.listarTodos();
    });
  }

  salvar(acompanhamento: Acompanhamento){
    if(acompanhamento.id > 0){
      this.lista[this.indiceSelecionado] = acompanhamento;
    
    } else {
      this.lista.push(acompanhamento);
    }

    this.modalService.dismissAll();
    this.listarTodos();
  }
}
