import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Cliente } from '../../model/Cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  API: string = "http://localhost:8080/cliente"

  http = inject(HttpClient);

  constructor() { }

  cadastrar(cliente: Partial<Cliente>){
    return this.http.post<Cliente>(this.API + ``, cliente);
  }

  buscarPorId(id: number){
    return this.http.get<Cliente>(this.API + `/buscar?id=${id}`);
  }

  buscarOndeNome(conteudo: string): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.API + `/buscar/nome?conteudo=${conteudo}`);
  }

  buscarOndeCpf(conteudo: string){
    return this.http.get<Cliente>(this.API + `/buscar/cpf?conteudo=${conteudo}`);
  }

  buscarClienteComecando(contendo: string): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.API + `/buscar/comecando?conteudo=${contendo}`);
  }

  buscarClienteTerminando(contendo: string): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.API + `/buscar/terminando?conteudo=${contendo}`);
  }

  buscarClienteContendo(conteudo: string): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.API + `/buscar/contendo?conteudo=${conteudo}`);
  }

  listar(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.API + `/listar`);
  }

  editar(clienteNovo: Partial<Cliente>){
    return this.http.put<Cliente>(this.API + `/editar?id=${clienteNovo.id}`, clienteNovo);
  }

  deletar(id: number){
    return this.http.delete<Cliente>(this.API + `/deletar?id=${id}`);
  }

  salvar(cliente: Partial<Cliente>){
    if(cliente.id){
      return this.editar(cliente);

    } else {
      return this.cadastrar(cliente);
    }
  }
}
