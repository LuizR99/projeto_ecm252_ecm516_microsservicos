import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { IUsuario } from '../interfaces/IUsuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient: HttpClient,
              private router: Router) { }

  logar(usuario: IUsuario): Observable<any> {
    return this.httpClient.post<any>('http://localhost:5000/api/auth/login', usuario).pipe(
      tap((resposta) => {
        if(!resposta.success) return;
        localStorage.setItem('token', btoa(JSON.stringify(resposta['token'])));
        this.router.navigate(['']);
      }));
  }
}
