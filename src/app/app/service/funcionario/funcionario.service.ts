import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Funcionario } from '../../model/funcionario/Funcionario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  API: string = "http://localhost:8080/funcionario";

  http = inject(HttpClient);

  constructor() { }

  cadastrar(funcionario: Partial<Funcionario>){
    return this.http.post<Funcionario>(this.API + ``, funcionario);
  }

  buscarPorId(id: number){
    return this.http.get<Funcionario>(this.API + `/buscar?id=${id}`);
  }

  buscarOndeNome(conteudo: string): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(this.API + `/buscar/nome?conteudo=${conteudo}`);
  }

  buscarOndeCpf(conteudo: string): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(this.API + `/buscar/cpf?conteudo=${conteudo}`);
  }

  buscarFuncionarioComecando(conteudo: string): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(this.API + `/buscar/comecando?conteudo=${conteudo}`);
  }

  buscarFuncionarioTerminando(conteudo: string): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(this.API + `/buscar/terminando?conteudo=${conteudo}`);
  }

  buscarFuncionarioContendo(conteudo: string): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(this.API + `/buscar/contendo?conteudo=${conteudo}`);
  }

  listar(): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(this.API + `/listar`);
  }

  editar(funcionarioNovo: Partial<Funcionario>){
    return this.http.put<Funcionario>(this.API + `/editar?id=${funcionarioNovo.id}`, funcionarioNovo);
  }

  deletar(id: number){
    return this.http.delete<Funcionario>(this.API + `/deletar?id=${id}`);
  }


  salvar(funcionario: Partial<Funcionario>){
    if(funcionario.id){
      return this.editar(funcionario);
       
    } else {
      return this.cadastrar(funcionario);
    }
  }
}
