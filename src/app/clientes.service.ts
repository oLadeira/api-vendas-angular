import { Cliente } from './clientes/cliente';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor() { }

  getCliente() : Cliente{
    let cliente : Cliente = new Cliente();
    cliente.nome = "Fulano de tal";
    cliente.cpf = "111.222.333-22"
    return cliente;
  }
}
