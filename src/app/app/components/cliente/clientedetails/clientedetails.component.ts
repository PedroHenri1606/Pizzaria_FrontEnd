import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { Cliente } from 'src/app/app/model/Cliente';
import { ClienteService } from 'src/app/app/service/cliente/cliente.service';

@Component({
  selector: 'app-clientedetails',
  templateUrl: './clientedetails.component.html',
  styleUrls: ['./clientedetails.component.scss']
})
export class ClientedetailsComponent implements OnInit {

  @Input() cliente: Cliente = new Cliente();
  @Output() retorno = new EventEmitter<Cliente>();

  service = inject(ClienteService);

  constructor(){}

  ngOnInit(): void {
    
  }

  cadastrar(){
    this.service.salvar(this.cliente).subscribe({
      next: cliente => {
        this.retorno.emit(cliente);
      },
      error: erro => {
        alert("Erro no envio dos dados, por favor revise o preenchimento dos cambos e informações presentes!");
        console.log(erro);
      }
    });
  }
}
