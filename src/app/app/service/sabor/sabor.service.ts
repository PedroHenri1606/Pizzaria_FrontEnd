import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Sabor } from '../../model/sabor/Sabor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaborService {

  API: string = "http://localhost:8080/sabor";

  http = inject(HttpClient);

  constructor() { }

  cadastrar(sabor: Partial<Sabor>){
    return this.http.post<Sabor>(this.API + ``, sabor);
  }

  buscarPorId(id: number){
    return this.http.get<Sabor>(this.API + `/buscar?id=${id}`);
  }

  buscarOndeNome(conteudo: string): Observable<Sabor[]>{
    return this.http.get<Sabor[]>(this.API + `/buscar/descricao?conteudo=${conteudo}`);
  }

  buscarSaborComecando(conteudo: string): Observable<Sabor[]>{
    return this.http.get<Sabor[]>(this.API + `/buscar/comecando?conteudo=${conteudo}`);
  }

  buscarSaborTerminando(contendo: string): Observable<Sabor[]>{
    return this.http.get<Sabor[]>(this.API + `/buscar/terminando?conteudo=${contendo}`);
  }

  buscarSaborContendo(contendo: string): Observable<Sabor[]>{
    return this.http.get<Sabor[]>(this.API + `/buscar/contendo?conteudo=${contendo}`);
  }

  listar(): Observable<Sabor[]>{
    return this.http.get<Sabor[]>(this.API + `/listar`);
  }

  editar(sabor: Partial<Sabor>){
    return this.http.put<Sabor>(this.API + `/editar?id=${sabor.id}`, sabor);
  }

  deletar(id: number){
    return this.http.delete<Sabor>(this.API + `/deletar?id=${id}`);
  }

  salvar(sabor: Partial<Sabor>){
    if(sabor.id){
      return this.editar(sabor);

    } else {
      return this.cadastrar(sabor);
    }
  }
}
