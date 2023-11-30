import { HttpClient } from '@angular/common/http';
import { Acompanhamento } from '../../model/acompanhamento/Acompanhamento';
import { Observable } from 'rxjs';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AcompanhamentoService {

  API: String = "http://localhost:8080/acompanhamento"
  
  http = inject(HttpClient);

  constructor() { }

  cadastrar(acompanhamento: Partial<Acompanhamento>){
    return this.http.post<Acompanhamento>(this.API + `` , acompanhamento);
  }

  buscarPorId(id: number){
    return this.http.get<Acompanhamento>(this.API + `/buscar?id=${id}`)
  }

  buscarOndeDescricao(conteudo: string): Observable<Acompanhamento[]>{
    return this.http.get<Acompanhamento[]>(this.API + `/buscar/descricao?conteudo=${conteudo}`);
  }

  buscarOndeValor(valor: number): Observable<Acompanhamento[]>{
    return this.http.get<Acompanhamento[]>(this.API + `/buscar/valor?conteudo=${valor}`);
  }

  buscarAcompanhamentoComecando(conteudo: string): Observable<Acompanhamento[]>{
    return this.http.get<Acompanhamento[]>(this.API + `/buscar/comecando?conteudo=${conteudo}`);
  }

  buscarAcompanhamentoTerminando(conteudo: string): Observable<Acompanhamento[]>{
    return this.http.get<Acompanhamento[]>(this.API + `/buscar/terminando?conteudo=${conteudo}`);
  }

  buscarAcompanhamentoContendo(conteudo: string): Observable<Acompanhamento[]>{
    return this.http.get<Acompanhamento[]>(this.API + `/buscar/contendo?conteudo=${conteudo}`);
  }

  listar(): Observable<Acompanhamento[]>{
    return this.http.get<Acompanhamento[]>(this.API + `/listar`);
  }

  editar(acompanhamentoNovo: Partial<Acompanhamento>){
    return this.http.put<Acompanhamento>(this.API + `/editar?id=${acompanhamentoNovo.id}`, acompanhamentoNovo);
  }

  deletar(id: number){
    return this.http.delete<Acompanhamento>(this.API + `/deletar?id=${id}`);
  }


  salvar(acompanhamento: Partial<Acompanhamento>){
    if(acompanhamento.id){
      return this.editar(acompanhamento);

    } else {
      return this.cadastrar(acompanhamento);
    }
  }
  
}
