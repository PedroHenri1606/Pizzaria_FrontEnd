import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Endereco } from '../../model/Endereco';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  API: string = "http://localhost:8080/endereco"

  http = inject(HttpClient);

  constructor() { }

  cadastrar(endereco: Partial<Endereco>){
    return this.http.post<Endereco>(this.API + ``, endereco);
  }

  buscarPorId(id: number){
    return this.http.get<Endereco>(this.API + `/buscar/id=${id}`);
  }

  listar(): Observable<Endereco[]>{
    return this.http.get<Endereco[]>(this.API + `/listar`);
  }

  listarPorClienteId(id: number): Observable<Endereco[]>{
    return this.http.get<Endereco[]>(this.API + `/listar/cliente?id=${id}`);
  }

  editar(enderecoNovo: Partial<Endereco>){
    return this.http.put<Endereco>(this.API + `/editar?id=${enderecoNovo.id}`, enderecoNovo);
  }

  deletar(id: number){
    return this.http.delete<Endereco>(this.API + `/deletar?id=${id}`);
  }

  salvar(endereco: Partial<Endereco>){
    if(endereco.id){
      return this.editar(endereco);

    } else {
      return this.cadastrar(endereco);
    }
  }
}
