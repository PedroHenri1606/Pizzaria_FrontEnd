import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Funcionario } from '../../../model/funcionario/Funcionario';
import { FuncionarioService } from '../../../service/funcionario/funcionario.service';

@Component({
  selector: 'app-funcionariodetails',
  templateUrl: './funcionariodetails.component.html',
  styleUrls: ['./funcionariodetails.component.scss']
})
export class FuncionariodetailsComponent {

  @Input() funcionario: Funcionario = new Funcionario();
  @Output() retorno = new EventEmitter<Funcionario>();

  service = inject(FuncionarioService);

  constructor(){}

  cadastrar(){
    this.service.salvar(this.funcionario).subscribe({
      next: funcionario =>{
        this.retorno.emit(funcionario);
      },
      error: erro => {
        alert("Erro na funcionario details, função salvar!");
        console.log(erro);
      }
    });
  }
}
