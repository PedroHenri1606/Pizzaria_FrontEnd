import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { Produto } from 'src/app/app/model/Produto';
import { ProdutoService } from 'src/app/app/service/produto/produto.service';

@Component({
  selector: 'app-produtodetails',
  templateUrl: './produtodetails.component.html',
  styleUrls: ['./produtodetails.component.scss']
})
export class ProdutodetailsComponent{

  @Input() produto: Produto = new Produto();
  @Output() retorno = new EventEmitter<Produto>();

  service = inject(ProdutoService);

  constructor(){}

  cadastrar(){
    this.service.salvar(this.produto).subscribe({
      next: produto =>{
        this.retorno.emit(produto);
      },
      error: erro => {
        alert("Erro na produto details, função salvar!");
        console.log(erro);
      }
    });
  }
}
