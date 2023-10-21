import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Funcionario } from 'src/app/app/model/Funcionario';
import { FuncionarioService } from 'src/app/app/service/funcionario/funcionario.service';

@Component({
  selector: 'app-funcionariolist',
  templateUrl: './funcionariolist.component.html',
  styleUrls: ['./funcionariolist.component.scss']
})
export class FuncionariolistComponent {

  modalService = inject(NgbModal);

  service = inject(FuncionarioService);

  lista: Funcionario[] = [];

  indiceSelecionado!: number;
  funcionarioSelecionado!: Funcionario;

  constructor(){
    this.listarTodos();
  }

  listarTodos(){
    this.service.listar().subscribe({
      next: lista => {
        this.lista = lista;
      },
      error: erro => {
        alert("Erro componente ts funcionario list");
        console.log(erro);
      }
    });
  }

  adicionar(modal: any){
    this.funcionarioSelecionado = new Funcionario();
    this.modalService.open(modal, {size: 'lg'});
  }

  editar(modal: any, id: number, funcionario: Funcionario){
    this.indiceSelecionado = id;
    this.funcionarioSelecionado = funcionario;
    this.modalService.open(modal, {size: 'lg'});
  }

  buscarPorId(modal: any, id: number){
    this.indiceSelecionado = id;
    this.funcionarioSelecionado = this.lista[id -1];
    this.modalService.open(modal, {size: 'lg'});
  }

  deletar(funcionario: Funcionario){
    this.service.deletar(funcionario.id).subscribe(() =>
    {
      this.listarTodos();
    });
  }

  salvar(funcionario: Funcionario){
    if(funcionario.id > 0){
      this.lista[this.indiceSelecionado] = funcionario;
    
    } else {
      this.lista.push(funcionario);
    }

    this.modalService.dismissAll();
    this.listarTodos();
  }

}
