import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  showErrorMessages: any;

  login = new FormControl('',
    [Validators.required]);

  password = new FormControl('',
    [Validators.required]);
  constructor(private router: Router,
    public afAuth: AngularFireAuth
  ) { }

  // cadastrarUsuario() {
  //    console.log('Login: ' + this.login.value);
  //    console.log('Senha  ' + this.password.value);

  //    this.afAuth
  //      .createUserWithEmailAndPassword(this.login.value!, this.password.value!)
  //      .then((result) => {
  //        console.log(result.user);
  //        localStorage.setItem('user', JSON.stringify(result.user));
  //        this.router.navigate(['/']);
  //      })
  //      .catch((error) => {
  //        this.showErrorMessages = true;
  //        console.log(error);
  //      });


  //    this.router.navigate(['/layout/produto']);
  // }

  realizarLogin() {
    console.log('Login: ' + this.login.value);
    console.log('Senha:  ' + this.password.value);

    this.afAuth
      .signInWithEmailAndPassword(this.login.value!, this.password.value!)
      .then((result) => {
        console.log(result.user);
        this.router.navigate(['/']);
      })
      .catch((error) => {
        console.log(error);
      });


    this.router.navigate(['/layout/produto']);
  }


  recuperarSenha() {
    this.afAuth
      .sendPasswordResetEmail(this.login.value!)
      .then(() => {
        window.alert('E-mail de recuperação de senha enviado!');
      })
      .catch((error) => {
        window.alert(error);
      });
  }

  // excluirConta() {
  //   this.afAuth.currentUser?.then((user) => {
  //     user?.delete().then(() => {
  //       window.alert('Conta excluída com sucesso');
  //     }).catch((error) => {
  //       window.alert(error);
  //     });
  //   });
  // }
}