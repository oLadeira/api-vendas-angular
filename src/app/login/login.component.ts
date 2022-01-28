import { AuthService } from './../auth.service';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string
  loginError: boolean;
  cadastroError: boolean;
  cadastrando: boolean;
  mensagemSucesso:string;
  errors:String[];

  constructor(private router: Router, private authService:AuthService) {

  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(`Usuário: ${this.username}`)
    console.log(`Senha: ${this.password}`)
  }

  preparaCadastrar(event:any){
    event.preventDefault(); //evita com que o evento aconteca, no caso o evento do href
    this.cadastrando = true;
  }

  cancelaCadastro(){
    this.cadastrando = false;
  }

  salvarUsuario(){
    const usuario : Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
    this.authService.salvarUsuario(usuario)
    .subscribe (response => {
      this.mensagemSucesso = 'Usuário cadastrado com sucesso! Favor efetue o Login!';
      this.errors = [];
      this.username = '';
      this.password = '';
      this.cadastrando = false;
    }, responseError => {
      this.errors = responseError.error.errors;
      this.mensagemSucesso = null;
    });
  }

}
