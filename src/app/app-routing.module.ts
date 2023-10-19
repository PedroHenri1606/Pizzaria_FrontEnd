import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './app/system/login/login.component';
import { IndexComponent } from './app/layout/index/index.component';
import { PedidolistComponent } from './app/components/pedido/pedidolist/pedidolist.component';
import { ProdutolistComponent } from './app/components/produto/produtolist/produtolist.component';
import { AcompanhamentolistComponent } from './app/components/acompanhamento/acompanhamentolist/acompanhamentolist.component';
import { AcompanhamentoPedidolistComponent } from './app/components/acompanhamento-pedido/acompanhamento-pedidolist/acompanhamento-pedidolist.component';
import { ClientelistComponent } from './app/components/cliente/clientelist/clientelist.component';
import { EnderecolistComponent } from './app/components/endereco/enderecolist/enderecolist.component';
import { FuncionariolistComponent } from './app/components/funcionario/funcionariolist/funcionariolist.component';
import { ProdutoPedidolistComponent } from './app/components/produto-pedido/produto-pedidolist/produto-pedidolist.component';
import { SaborlistComponent } from './app/components/sabor/saborlist/saborlist.component';

const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: 'full'},
  {path: "login", component: LoginComponent},
  {path: "admin", component: IndexComponent, children: [
    
    {path: "acompanhamento", component: AcompanhamentolistComponent},

    {path: "acompanhamento-pedido", component: AcompanhamentoPedidolistComponent},

    {path: "cliente", component: ClientelistComponent},

    {path: "endereco", component: EnderecolistComponent},

    {path: "funcionario", component: FuncionariolistComponent},

    {path: "pedido", component: PedidolistComponent},

    {path: "produtos", component: ProdutolistComponent},

    {path: "produto-pedido", component: ProdutoPedidolistComponent},

    {path: "sabor", component: SaborlistComponent}
  ]},

  {path: "funcionario", component: IndexComponent, children:[
    
    {path: "acompanhamento", component: AcompanhamentolistComponent},

    {path: "acompanhamento-pedido", component: AcompanhamentoPedidolistComponent},

    {path: "cliente", component: ClientelistComponent},

    {path: "endereco", component: EnderecolistComponent},

    {path: "funcionario", component: FuncionariolistComponent},

    {path: "pedido", component: PedidolistComponent},

    {path: "produtos", component: ProdutolistComponent},

    {path: "produto-pedido", component: ProdutoPedidolistComponent},

    {path: "sabor", component: SaborlistComponent}
  ]}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
