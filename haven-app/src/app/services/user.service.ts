import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IUser } from '../interfaces/IUser';
const apiAuthUrl = environment.apiAuthUrl + "Usuario";
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
constructor(private httpClient: HttpClient,
            private router: Router) { }
  logar(user: IUser) : Observable<any> {
    return this.httpClient.post<any>(apiAuthUrl + "/api/auth/login", user).pipe(
      tap((resposta) => {
        if(!resposta.sucesso) return;
        localStorage.setItem('token', btoa(JSON.stringify(resposta['token'])));
        this.router.navigate(['']);
      }));
  }


  deslogar() {
      localStorage.clear();
      this.router.navigate(['login']);
  }

  get getToken(): string {
    return localStorage.getItem('token')
      ? JSON.parse(atob(localStorage.getItem('token')))
      : null;
  }

}