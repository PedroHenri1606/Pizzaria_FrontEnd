import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { AcompanhamentoPedido } from '../../model/acompanhamentoPedido/AcompanhamentoPedido';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AcompanhamentoPedidoService {

  API: string = "http://localhost:8080/acompanhamento-pedido"

  http = inject(HttpClient);

  constructor() { }

  cadastrar(acompanhamentoPedido: Partial<AcompanhamentoPedido>){
    return this.http.post<AcompanhamentoPedido>(this.API + ``, acompanhamentoPedido);
  }

  buscarPorId(id: number){
    return this.http.get<AcompanhamentoPedido>(this.API + `/buscar?id=${id}`);
  }

  listar(): Observable<AcompanhamentoPedido[]>{
    return this.http.get<AcompanhamentoPedido[]>(this.API + `/listar`);
  }

  editar(acompanhamentoPedidoNovo: Partial<AcompanhamentoPedido>){
    return this.http.put<AcompanhamentoPedido>(this.API + `/editar?id=${acompanhamentoPedidoNovo.id}`, acompanhamentoPedidoNovo);
  }

  deletar(id: number){
    return this.http.delete<AcompanhamentoPedido>(this.API + `/deletar?id=${id}`);
  }

  salvar(acompanhamentoPedido: Partial<AcompanhamentoPedido>){
    if(acompanhamentoPedido.id){
      return this.editar(acompanhamentoPedido);

    } else {
      return this.cadastrar(acompanhamentoPedido);
    }
  }
}
