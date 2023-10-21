import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Acompanhamento } from 'src/app/app/model/Acompanhamento';
import { AcompanhamentoService } from 'src/app/app/service/acompanhamento/acompanhamento.service';

@Component({
  selector: 'app-acompanhamentodetails',
  templateUrl: './acompanhamentodetails.component.html',
  styleUrls: ['./acompanhamentodetails.component.scss']
})
export class AcompanhamentodetailsComponent {

  @Input() acompanhamento: Acompanhamento = new Acompanhamento();
  @Output() retorno = new EventEmitter<Acompanhamento>();

  service = inject(AcompanhamentoService);

  constructor(){}

  cadastrar(){
    this.service.salvar(this.acompanhamento).subscribe({
      next: acompanhamento => {
        this.retorno.emit(acompanhamento);
      },
      error: erro => {
        alert("Erro no details!");
        console.log(erro);
      }
    });
  }
}
