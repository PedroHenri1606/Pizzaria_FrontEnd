import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ProdutoPedido } from '../../model/produtoPedido/ProdutoPedido';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoPedidoService {

  API: string = "http://localhost:8080/produto-pedido"

  http = inject(HttpClient);

  constructor() { }

  cadastrar(produtoPedido: Partial<ProdutoPedido>){
    return this.http.post<ProdutoPedido>(this.API + ``, produtoPedido);
  }

  buscarPorId(id: number){
    return this.http.get<ProdutoPedido>(this.API + `/buscar?id=${id}`);
  }

  listar(): Observable<ProdutoPedido[]>{
    return this.http.get<ProdutoPedido[]>(this.API + `/listar`);
  }

  editar(produtoPedidoNovo: Partial<ProdutoPedido>){
    return this.http.put<ProdutoPedido>(this.API + `/editar?id=${produtoPedidoNovo.id}`, produtoPedidoNovo);
  }

  deletar(id: number){
    return this.http.delete<ProdutoPedido>(this.API + `/deletar?id=${id}`);
  }

  salvar(produtoPedido: Partial<ProdutoPedido>){
    if(produtoPedido.id){
      return this.editar(produtoPedido);

    } else {
      return this.cadastrar(produtoPedido);
    }
  }
}
