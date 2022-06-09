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

  getById(userId:String){
    const token = localStorage.getItem('token')?.replace(`"`,``).replace(`"`,``);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.get<any>(`${this.urlUser}/api/user/${userId}`, httpOptions);
  }

  update(user: IUser) {
    const token = localStorage.getItem('token')?.replace(`"`,``).replace(`"`,``);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.put<any>(`${this.urlUser}/api/user`, user, httpOptions);
  }

}
