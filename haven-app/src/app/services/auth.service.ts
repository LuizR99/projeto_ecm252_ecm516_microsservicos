import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, tap } from 'rxjs';
import { ILogin } from '../interfaces/ILogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  urlAuth = "http://localhost:5000";

  constructor(private httpClient: HttpClient,
              private router: Router) { }

  logar(login: ILogin): Observable<any> {
    return this.httpClient.post<any>(this.urlAuth + '/api/auth/login', login).pipe(
      tap((resposta) => {
        if(!resposta.success) return;
        localStorage.setItem('token', JSON.stringify(resposta['token']));
        this.router.navigate(['']);
      }));
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

  get obterTokenAuth(): string | null {
    return localStorage.getItem('token');
  }

  get logado(): boolean {
    var token = localStorage.getItem('token');
    if(token == null) {
      return false;
    }
    return token.length >  0;
  }
}
