import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService } from '../usuario/service/usuario.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrl: './lista-usuario.component.css'
})
export class ListaUsuarioComponent implements OnInit {
  public usuarios: any;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(usuarios => {
      console.log(usuarios)
      this.usuarios = usuarios;
    });
  }

  excluir(key: any) {
    console.log(key);
    this.usuarioService.excluir(key).then(retorno => {
      console.log(retorno);
    });
  }

  editar(key: any) {
    this.router.navigate(['/layout/cadastro-usuario/'+key]);
  }
}
