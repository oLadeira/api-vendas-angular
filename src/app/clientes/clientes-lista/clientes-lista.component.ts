import { ClientesService } from './../../clientes.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-lista',
  templateUrl: './clientes-lista.component.html',
  styleUrls: ['./clientes-lista.component.css']
})
export class ClientesListaComponent implements OnInit {

  clientes:Cliente[] = [];

  constructor(private clienteService:ClientesService) { }

  ngOnInit(): void {
    this.clienteService.getClientes()
    .subscribe(resposta => {
      this.clientes = resposta;
    })
  }
}
