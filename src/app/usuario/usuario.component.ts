import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from './service/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { UsuarioModel } from './model/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css'
})
export class UsuarioComponent {
  constructor(private usuarioService: UsuarioService, 
    private router: ActivatedRoute,
    private builder: FormBuilder
  ) { }

  showSuccessMessages = false;
  showErrorMessages = false;

  key?: string;

  formGroup = this.builder.group({
    nome: ['', [Validators.required]],
    senha: ['', [Validators.required,
      Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/)
    ]]
  });

  ngOnInit(): void {
    this.router.paramMap.subscribe(paramMap => {
      this.key = paramMap.get('key')?.toString();
      if (this.key) {
        this.usuarioService.carregar(this.key).subscribe(usuario => {
          this.formGroup.controls.nome.patchValue(usuario.nome);
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

    var produto = new UsuarioModel();
    produto.nome = this.formGroup.controls.nome.value?.toString();
    //produto.preco = this.formGroup.controls.preco?.valu

    if (this.key) {
      //codigo para alterar o produto
      this.usuarioService.alterar(this.key, produto).then(result => {
        this.showSuccessMessages = true;
        console.log(result);
      });
    } else {
      //codigo para salvar o produto
      this.usuarioService.salvar(produto).then(result => {
        this.showSuccessMessages = true;
        console.log(result);
      });
    }
  }
}
