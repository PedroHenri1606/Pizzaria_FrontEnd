import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Endereco } from 'src/app/app/model/Endereco';
import { EnderecoService } from 'src/app/app/service/endereco/endereco.service';

@Component({
  selector: 'app-enderecodetails',
  templateUrl: './enderecodetails.component.html',
  styleUrls: ['./enderecodetails.component.scss']
})
export class EnderecodetailsComponent {

  @Input() endereco: Endereco = new Endereco();
  @Output() retorno = new EventEmitter<Endereco>();

  service = inject(EnderecoService);

  constructor(){}

  salvar(){
    this.service.cadastrar(this.endereco).subscribe({
      next: endereco => {
        this.retorno.emit(endereco);
      },
      error: erro => {
        alert("Erro ao tentar cadastrar um novo endereço, verifique se o dados informados são válidos!");
        console.log(erro);
      }
    })
  }
}
