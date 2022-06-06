import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlUser = "http://localhost:3000";

  constructor(private http:HttpClient) { }

  register(user: IUser) {
    return this.http.post(`${this.urlUser}/api/user`, user);
  }
}
