import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Pedido } from 'src/app/app/model/Pedido';
import { PedidoService } from 'src/app/app/service/pedido/pedido.service';

@Component({
  selector: 'app-pedidodetails',
  templateUrl: './pedidodetails.component.html',
  styleUrls: ['./pedidodetails.component.scss']
})
export class PedidodetailsComponent {

  @Input() pedido: Pedido = new Pedido();
  @Output() retorno = new EventEmitter<Pedido>();

  service = inject(PedidoService);

  constructor(){}

  cadastrar(){
    this.service.salvar(this.pedido).subscribe({
      next: pedido => {
        this.retorno.emit(pedido);
      },
      error: erro => {
        alert("Erro no envio dos dados, por favor revise o preenchimento dos cambos e informações presentes!");
      }
    })
  }
}
