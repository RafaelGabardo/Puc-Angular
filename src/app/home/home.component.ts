import { Component } from '@angular/core';
import { ProdutoService } from '../produto/service/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public produtos: any;

  constructor(
    private produtoService: ProdutoService
  ) {}

  ngOnInit(): void {
    this.produtoService.listar().subscribe(produtos => {
      console.log(produtos)
      this.produtos = produtos;
    });
  }
}
