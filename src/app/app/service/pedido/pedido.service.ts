import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Pedido } from '../../model/Pedido';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  API: string = "http://localhost:8080/pedido";

  http = inject(HttpClient);

  constructor() { }

  cadastrar(pedido: Partial<Pedido>){
    return this.http.post<Pedido>(this.API + ``, pedido);
  }

  buscarPorId(id: number){
    return this.http.get<Pedido>(this.API + `/buscar?id=${id}`);
  }

  listar(): Observable<Pedido[]>{
    return this.http.get<Pedido[]>(this.API + `/listar`);
  }

  editar(pedidoNovo: Partial<Pedido>){
    return this.http.put<Pedido>(this.API + `/editar?id=${pedidoNovo.id}`, pedidoNovo);
  }

  salvar(pedido: Partial<Pedido>){
    if(pedido.id){
      return this.editar(pedido);

    } else {
      return this.cadastrar(pedido);
    }
  }
}
