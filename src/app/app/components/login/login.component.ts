import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../service/login/login.service';
import { Login } from '../../model/login/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  login: Login = new Login();
  roteador = inject(Router);
  service = inject(LoginService);

  constructor(){
    this.service.removerToken();
  }

  logar(){
    this.service.logar(this.login).subscribe({
      next: user => {
        console.log(user);
        this.service.addToken(user.token);
        this.roteador.navigate(['admin/pedido/menu']);
      },
      error: erro => {
        alert("Usuario ou senha invalida, verifique o console!");
        console.log(erro);
      }
    });
  }
}