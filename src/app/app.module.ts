import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { IndexComponent } from './app/layout/index/index.component';
import { HeaderComponent } from './app/layout/header/header.component';
import { FooterComponent } from './app/layout/footer/footer.component';
import { LoginComponent } from './app/system/login/login.component';
import { ProdutodetailsComponent } from './app/components/produto/produtodetails/produtodetails.component';
import { ProdutolistComponent } from './app/components/produto/produtolist/produtolist.component';
import { AcompanhamentolistComponent } from './app/components/acompanhamento/acompanhamentolist/acompanhamentolist.component';
import { AcompanhamentodetailsComponent } from './app/components/acompanhamento/acompanhamentodetails/acompanhamentodetails.component';
import { ClientelistComponent } from './app/components/cliente/clientelist/clientelist.component';
import { ClientedetailsComponent } from './app/components/cliente/clientedetails/clientedetails.component';
import { EnderecolistComponent } from './app/components/endereco/enderecolist/enderecolist.component';
import { EnderecodetailsComponent } from './app/components/endereco/enderecodetails/enderecodetails.component';
import { FuncionariolistComponent } from './app/components/funcionario/funcionariolist/funcionariolist.component';
import { FuncionariodetailsComponent } from './app/components/funcionario/funcionariodetails/funcionariodetails.component';
import { PedidolistComponent } from './app/components/pedido/pedidolist/pedidolist.component';
import { PedidodetailsComponent } from './app/components/pedido/pedidodetails/pedidodetails.component';

import { SaborlistComponent } from './app/components/sabor/saborlist/saborlist.component';
import { SabordetailsComponent } from './app/components/sabor/sabordetails/sabordetails.component';
import { ProdutoPedidolistComponent } from './app/components/produtoPedido/produto-pedidolist/produto-pedidolist.component';
import { ProdutoPedidodetailsComponent } from './app/components/produtoPedido/produto-pedidodetails/produto-pedidodetails.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ProdutolistComponent,
    ProdutodetailsComponent,
    AcompanhamentolistComponent,
    AcompanhamentodetailsComponent,
    ClientelistComponent,
    ClientedetailsComponent,
    EnderecolistComponent,
    EnderecodetailsComponent,
    FuncionariolistComponent,
    FuncionariodetailsComponent,
    PedidolistComponent,
    PedidodetailsComponent,
    SaborlistComponent,
    SabordetailsComponent,
    ProdutoPedidolistComponent,
    ProdutoPedidodetailsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
