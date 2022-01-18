import { ServicoPrestadoService } from './../../servico-prestado.service';
import { ServicoPrestado } from './../servicoPrestado';
import { ClientesService } from './../../clientes.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/clientes/cliente';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {

  clientes:Cliente[] = [];
  servicoPrestado!: ServicoPrestado;
  success: boolean = false;
  errors!: String[];

  constructor(private clienteService: ClientesService, private servicoPrestadoService: ServicoPrestadoService) {
    this.servicoPrestado = new ServicoPrestado();
  }

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(clientes => {
      this.clientes = clientes;
    });
  }

  onSubmit(){
    this.servicoPrestadoService.salvar(this.servicoPrestado)
    .subscribe(response => {
      this.success = true;
      this.errors = [];
      this.servicoPrestado = new ServicoPrestado(); //para limpar o formulario apos salvar
    }, errorResponse => {
      this.errors = errorResponse.error.errors;
    });
  }

}
