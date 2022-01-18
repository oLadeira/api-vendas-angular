import { environment } from './../environments/environment';
import { Cliente } from './clientes/cliente';
import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL: string = environment.apiURL;

  constructor(private http:HttpClient) { }

  salvar( cliente:Cliente ):Observable<Cliente>{
    return this.http.post<Cliente>(`${this.apiURL}/api/cliente`, cliente);
  }

  atualizar(cliente:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(`${this.apiURL}/api/cliente/${cliente.id}`, cliente);
  }

  deletar(cliente:Cliente){
    return this.http.delete<any>(`${this.apiURL}/api/cliente/${cliente.id}`)
  }

  getClientes():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.apiURL}/api/cliente/`);
  }

  getClienteById(id: number):Observable<Cliente>{
    return this.http.get<any>(`${this.apiURL}/api/cliente/${id}`);
  }
}
