import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { ListaProdutoComponent } from './lista-produto/lista-produto.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { ProdutoComponent } from './produto/produto.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from './environment/environment';
import { PaginaProdutoComponent } from './pagina-produto/pagina-produto.component';
import { PaginaUsuarioComponent } from './pagina-usuario/pagina-usuario.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LayoutComponent,
    HomeComponent,
    ListaProdutoComponent,
    ListaUsuarioComponent,
    ProdutoComponent,
    UsuarioComponent,
    LoginComponent,
    PaginaProdutoComponent,
    PaginaUsuarioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideFirebaseApp(() => initializeApp({"projectId":"puc-ang","appId":"1:899759114167:web:a04c10a472953138a40a32","databaseURL":"https://puc-ang-default-rtdb.firebaseio.com","storageBucket":"puc-ang.appspot.com","apiKey":"AIzaSyCyFl_GK2IG0Nt5Q2UFTw9jo8VJZ6PdExo","authDomain":"puc-ang.firebaseapp.com","messagingSenderId":"899759114167"})),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
