import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto/service/produto.service';
import { UsuarioService } from '../usuario/service/usuario.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  public produtos: any;
  public usuarios: any;

  constructor(
    private produtoService: ProdutoService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.produtoService.listar().subscribe(produtos => {
      console.log(produtos)
      this.produtos = produtos;
    });
    this.usuarioService.listar().subscribe(usuarios => {
      console.log(usuarios)
      this.usuarios = usuarios;
    });
  }
}