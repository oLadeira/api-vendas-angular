import { Cliente } from './clientes/cliente';
import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http:HttpClient) { }

  salvar( cliente:Cliente ):Observable<Cliente>{
    return this.http.post<Cliente>('http://localhost:8080/api/cliente', cliente);
  }

  atualizar(cliente:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(`http://localhost:8080/api/cliente/${cliente.id}`, cliente);
  }

  getClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>('http://localhost:8080/api/cliente');
  }

  getClienteById(id: number):Observable<Cliente>{
    return this.http.get<any>(`http://localhost:8080/api/cliente/${id}`);
  }
}
