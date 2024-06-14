import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './produto/produto.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PaginaProdutoComponent } from './pagina-produto/pagina-produto.component';
import { PaginaUsuarioComponent } from './pagina-usuario/pagina-usuario.component';

const routes: Routes = [
  {
    path: 'layout', component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'produto', component: PaginaProdutoComponent },
      { path: 'usuario', component: PaginaUsuarioComponent },
      { path: 'cadastro-produto', component: ProdutoComponent },
      { path: 'cadastro-usuario', component: UsuarioComponent },
      { path: 'lista-usuario', component: ListaUsuarioComponent },
      { path: 'lista-produto', component: ListaProdutoComponent },
      { path: 'dashboard', component: DashboardComponent }
    ]
  },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
