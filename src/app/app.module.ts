import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClienteComponent } from './app/cliente/cliente.component';
import { FuncionarioComponent } from './app/funcionario/funcionario.component';
import { AcompanhamentoComponent } from './app/acompanhamento/acompanhamento.component';
import { ProdutoComponent } from './app/produto/produto.component';
import { SaborComponent } from './app/sabor/sabor.component';
import { PedidoComponent } from './app/pedido/pedido.component';
import { EnderecoComponent } from './app/endereco/endereco.component';
import { AcompanhamentoPedidoComponent } from './app/acompanhamento-pedido/acompanhamento-pedido.component';
import { ProdutoPedidoComponent } from './app/produto-pedido/produto-pedido.component';
import { IndexComponent } from './app/layout/index/index.component';
import { HeaderComponent } from './app/layout/header/header.component';
import { FooterComponent } from './app/layout/footer/footer.component';
import { LoginComponent } from './app/sistema/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    FuncionarioComponent,
    AcompanhamentoComponent,
    ProdutoComponent,
    SaborComponent,
    PedidoComponent,
    EnderecoComponent,
    AcompanhamentoPedidoComponent,
    ProdutoPedidoComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
