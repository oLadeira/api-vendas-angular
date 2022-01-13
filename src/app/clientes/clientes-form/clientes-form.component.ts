import { ClientesService } from './../../clientes.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente!: Cliente;
  success:boolean = false;
  errors!:string[];

  constructor( private clienteService : ClientesService) {
    this.cliente = new Cliente();
  }

  ngOnInit(): void {
    //this.cliente = this.clienteService.getCliente();
  }

  onSubmit(){
    this.clienteService
    .salvar(this.cliente)
    .subscribe (() => {
      this.success = true;
      this.errors = [];
    }, errorResponse => {
      this.success = false;
      this.errors = errorResponse.error.errors;
    });
  }

}
