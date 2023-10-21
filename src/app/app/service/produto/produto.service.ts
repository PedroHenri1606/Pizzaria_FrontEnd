import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Produto } from '../../model/Produto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  API: string =  "http://localhost:8080/produto"

  http = inject(HttpClient);

  constructor() { }

  salvar(produto: Partial<Produto>){
    if(produto.id){
      console.log("update");
      return this.editar(produto);

    } else {
      console.log("salvar");
      return this.cadastrar(produto);
    }
  }

  cadastrar(produto: Partial<Produto>){
    return this.http.post<Produto>(this.API + ``, produto);
  }

  buscarPorId(id: number){
    return this.http.get<Produto>(this.API + `/buscar?id=${id}`);
  }

  buscarPorDescricao(conteudo: string): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.API + `/buscar/descricao?conteudo=${conteudo}`);
  }

  buscarPorValor(contendo: number): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.API + `/buscar/valor?conteudo=${contendo}`);
  }

  buscarProdutoComecando(conteudo: string): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.API + `/buscar/comecando?conteudo=${conteudo}`);
  }

  buscarProdutoTerminando(contendo: string): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.API + `/buscar/terminando?conteudo=${contendo}`);
  }

  buscarProdutoContendo(contendo: string): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.API + `/buscar/contendo?conteudo=${contendo}`);
  }

  listar(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.API + `/listar`);
  }

  editar(produtoNovo: Partial<Produto>){
    return this.http.put<Produto>(this.API + `/editar?id=${produtoNovo.id}`, produtoNovo);
  }

  deletar(id: number){
    return this.http.delete<Produto>(this.API + `/deletar?id=${id}`);
  }

}
