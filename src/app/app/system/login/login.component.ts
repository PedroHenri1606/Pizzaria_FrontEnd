import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  roteador = inject(Router);

  user: User = new User("","");

  logar(){
    if(this.user.email == "admin" && this.user.senha == "admin"){
      this.roteador.navigate(['/admin/pedido']);
    
    } else if(this.user.email == "func" && this.user.senha == "func"){
      this.roteador.navigate(['/funcionario/pedido']);
    } 
    else {
      alert("Senha ou emails incorretos, tente novamente!");
    }
  }
}
