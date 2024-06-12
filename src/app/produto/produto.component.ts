import { Component } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProdutoService } from './service/produto.service';
import { ActivatedRoute } from '@angular/router';
import { ProdutoModel } from './model/produto.model';
import { Router } from 'express';
import { Console } from 'node:console';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {

  constructor(private produtoService: ProdutoService, 
    private router: ActivatedRoute,
    private builder: FormBuilder
  ) { }

  showSuccessMessages = false;
  showErrorMessages = false;

  key?: string;

  formGroup = this.builder.group({
    nome: ['', [Validators.required]],
    preco: ['', [Validators.required, Validators.min(5.1),
      Validators.pattern('^[0-9]+(\.[0-9]{1,2})?$')
    ]]
  });

  ngOnInit(): void {
    this.router.paramMap.subscribe(paramMap => {
      this.key = paramMap.get('key')?.toString();
      if (this.key) {
        this.produtoService.carregar(this.key).subscribe(produto => {
          this.formGroup.controls.nome.patchValue(produto.nome);
        });
      }
    })
  }

  salvar(): void {
    if (this.formGroup.invalid) {
      console.log('Formulário inválido');
      this.formGroup.markAllAsTouched();
      this.showErrorMessages = true;
      return;
    }

    var produto = new ProdutoModel();
    produto.nome = this.formGroup.controls.nome.value?.toString();
    //produto.preco = this.formGroup.controls.preco?.value;

    if (this.key) {
      //codigo para alterar o produto
      this.produtoService.alterar(this.key, produto).then(result => {
        this.showSuccessMessages = true;
        console.log(result);
      });
    } else {
      //codigo para salvar o produto
      this.produtoService.salvar(produto).then(result => {
        this.showSuccessMessages = true;
        console.log(result);
      });
    }
  }
}
