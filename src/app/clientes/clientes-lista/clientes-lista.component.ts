import { ClientesService } from './../../clientes.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes:Cliente[] = [];
  clienteSelecionadoDelecao!: Cliente;
  mensagemSucesso!:string;
  mensagemErro!:string;

  constructor(private clienteService:ClientesService, private router: Router) { }

  ngOnInit(): void {
    this.clienteService.getClientes()
    .subscribe(resposta => {
      this.clientes = resposta;
    })
  }

  novoCadastro(){
    this.router.navigate(["/clientes-form"])
  }

  preparaDelecao(cliente:Cliente){
    this.clienteSelecionadoDelecao = cliente;
  }

  deletar(){
    this.clienteService.deletar(this.clienteSelecionadoDelecao)
    .subscribe(response => {
      this.mensagemSucesso = "Cliente deletado com sucesso!"
      this.ngOnInit(); //para atualizar a tabela apos deletar cliente
    }, error => {
      this.mensagemErro = "Erro ao tentar deletar Cliente!"
    }
    );
  }
}
