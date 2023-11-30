import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from '../../model/user/User';
import { Login } from '../../model/login/Login';
import { Observable } from 'rxjs';
import { jwtDecode, JwtPayload } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API: string = "http://localhost:8080";
  http = inject(HttpClient);

  constructor() { }

  logar(login: Login): Observable<User>{
    return this.http.post<User>(this.API+'/login' ,login);
  }

  deslogar(): Observable<any>{
    return this.http.get<any>(this.API + '/deslogar');
  }

  addToken(token: string){
    localStorage.setItem('token', token);
  }

  removerToken(){
    localStorage.removeItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  jwtDecode(){
    let token = this.getToken();
    if(token){
      return jwtDecode<JwtPayload>(token);
    }
    return "";
  }

  hasPermission(role: String){
    let user = this.jwtDecode() as User;
    if(user.role == role)
      return true;
    else
      return false;
  }
}
