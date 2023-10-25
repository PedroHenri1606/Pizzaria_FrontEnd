import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Acompanhamento } from 'src/app/app/model/Acompanhamento';
import { Cliente } from 'src/app/app/model/Cliente';
import { Endereco } from 'src/app/app/model/Endereco';
import { Funcionario } from 'src/app/app/model/Funcionario';
import { Pedido } from 'src/app/app/model/Pedido';
import { Produto } from 'src/app/app/model/Produto';
import { PedidoService } from 'src/app/app/service/pedido/pedido.service';

@Component({
  selector: 'app-pedidodetails',
  templateUrl: './pedidodetails.component.html',
  styleUrls: ['./pedidodetails.component.scss']
})
export class PedidodetailsComponent {

  @Input() pedido: Pedido = new Pedido();
  @Output() retorno = new EventEmitter<Pedido>();

  modalService = inject(NgbModal);
  modalRef!: NgbModalRef;

  service = inject(PedidoService);

  @Input() nomeFuncionario: string = "";
  @Input() nomeCliente: string = "";
  @Input() logadouroEndereco: string = "";
  @Input() numeroEndereco: number = 0;
  @Input() bairroEndereco: string = "";

  constructor(){

  }

  salvar(){
    this.service.salvar(this.pedido).subscribe({
      next: pedido => {
        this.retorno.emit(pedido);
        console.log(pedido.cliente.enderecos );
      },
      error: erro => {
        alert("Erro ao tentar cadastrar um novo pedido!");
        console.log(erro);
      }
    });
  }

  excluirProduto( indice: number){
    this.pedido.item.splice(indice,1);
  }

  excluirComplemento( indice: number){
    this.pedido.acompanhamento.splice(indice,1);
  }

  retornoProdutoList(produto: Produto){
    if (this.pedido.item == null)
      this.pedido.item = [];

    this.pedido.item.push(produto);
    this.modalRef.dismiss();
    }

  retornoAcompanhamentoList(acompanhamento: Acompanhamento){
    if (this.pedido.item == null)
        this.pedido.item = [];
  
    this.pedido.acompanhamento.push(acompanhamento);
    this.modalRef.dismiss();
    }

  retornoClienteList(cliente: Cliente){
    this.pedido.cliente = cliente;
    this.nomeCliente = cliente.nome;
    this.modalRef.dismiss();
  }

  retornoFuncionarioList(funcionario: Funcionario){
    this.pedido.funcionario = funcionario;
    this.nomeFuncionario = funcionario.nome;
    this.modalRef.dismiss();
  }

  retornoEndereco(endereco: Endereco){
    this.logadouroEndereco = endereco.logadouro;
    this.bairroEndereco = endereco.bairro;
    this.numeroEndereco = endereco.numero;
    this.pedido.enderecoEntrega = endereco;
    this.modalRef.dismiss();
  }

  lancarItens(modal: any){
    this.modalRef = this.modalService.open(modal, {size: 'lg'});
  }

  
  lancarCliente(modal: any){
    this.modalRef = this.modalService.open(modal, {size: 'lg'});
  }

  
  lancarFuncionario(modal: any){
    this.modalRef = this.modalService.open(modal, {size: 'lg'});
  }

  lancarEndereco(modal: any){
    this.modalRef = this.modalService.open(modal, {size: 'lg'});
  }
}
