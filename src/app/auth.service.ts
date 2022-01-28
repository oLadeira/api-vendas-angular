import { environment } from './../environments/environment';
import { Usuario } from './login/usuario';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl : string = environment.apiURL + '/api/usuarios';

  constructor(private http: HttpClient) { }

  salvarUsuario(usuario:Usuario) : Observable<any>{
    return this.http.post<any>(this.apiUrl, usuario)
  }

}
