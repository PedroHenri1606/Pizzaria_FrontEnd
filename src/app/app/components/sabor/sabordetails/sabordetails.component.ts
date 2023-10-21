import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Sabor } from 'src/app/app/model/Sabor';
import { SaborService } from 'src/app/app/service/sabor/sabor.service';

@Component({
  selector: 'app-sabordetails',
  templateUrl: './sabordetails.component.html',
  styleUrls: ['./sabordetails.component.scss']
})
export class SabordetailsComponent {

  @Input() sabor: Sabor = new Sabor();
  @Output() retorno = new EventEmitter<Sabor>();

  service = inject(SaborService);

  constructor(){}

  cadastrar(){
    this.service.salvar(this.sabor).subscribe({
      next: sabor => {
        this.retorno.emit(sabor);
      },
      error: erro => {
        console.log(erro);
        alert("Erro no details!");
      }
    })
  }
}
