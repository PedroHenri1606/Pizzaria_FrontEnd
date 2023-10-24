import { Component, EventEmitter, Input, Output, inject} from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Funcionario } from 'src/app/app/model/Funcionario';
import { FuncionarioService } from 'src/app/app/service/funcionario/funcionario.service';

@Component({
  selector: 'app-funcionariolist',
  templateUrl: './funcionariolist.component.html',
  styleUrls: ['./funcionariolist.component.scss']
})
export class FuncionariolistComponent {
  
  @Output() retorno = new EventEmitter<Funcionario>();
  @Input() modoLancamento: boolean = false;

  lista: Funcionario[] = [];

  indiceSelecionado!: number;
  funcionarioSelecionado!: Funcionario;

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;
  service = inject(FuncionarioService);

  constructor(){
    this.listarTodos();
  }

  listarTodos(){
    this.service.listar().subscribe({
      next: lista => {
        this.lista = lista
      },
      error: erro => {
        alert("Erro ao carregar os dados da lista!");
        console.log(erro);
      }
    });
  }

  buscarPorId(modal: any, id: number){
    this.service.buscarPorId(id).subscribe({
      next: funcionario => {
        this.funcionarioSelecionado = funcionario;
        this.modalRef = this.modalService.open(modal, {size: 'lg'});

      },
      error: erro => {
        alert("Erro ao buscar Funcionario por id, verifique se o dado informado é valido!");
        console.log(erro);
      }
    });
  }

  salvar(modal: any){
    this.funcionarioSelecionado = new Funcionario();
    this.indiceSelecionado = -1;
    this.modalRef = this.modalService.open(modal, {size: 'lg'});
  }

  editar(modal: any, id: number, funcionario: Funcionario){
    this.funcionarioSelecionado = Object.assign({}, funcionario);
    this.indiceSelecionado = id;
    this.modalRef = this.modalService.open(modal, {size: 'lg'});
  }

  deletar(funcionario: Funcionario){
    this.service.deletar(funcionario.id).subscribe(() =>
      this.listarTodos()
    );
  }

  adicionarOuEditar(funcionario: Funcionario){
    this.listarTodos();
    this.modalService.dismissAll();
  }

  lancamento(funcionario: Funcionario){
    this.retorno.emit(funcionario);
  }
}
