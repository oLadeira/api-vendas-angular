import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!: string;
  password!: string
  loginError!: boolean;
  cadastrando!: boolean;

  constructor() { }

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

}
