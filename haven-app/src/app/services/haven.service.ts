import { Injectable } from '@angular/core';
import { IHaven } from '../interfaces/IHaven';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IHavenRegister } from '../interfaces/IHavenRegister';

@Injectable({
  providedIn: 'root'
})
export class HavenService {

  urlHaven = "http://localhost:4000";


  constructor(private httpClient: HttpClient) { }

  register(haven: IHavenRegister) {
    const token = localStorage.getItem('token')?.replace(`"`,``).replace(`"`,``);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.httpClient.post(`${this.urlHaven}/api/haven`, haven, httpOptions);
  }

  update(haven: IHaven, id:String) {
    const token = localStorage.getItem('token')?.replace(`"`,``).replace(`"`,``);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.httpClient.put(`${this.urlHaven}/api/haven/${id}`, haven, httpOptions);
  }

  getUserHavens(){
    const token = localStorage.getItem('token')?.replace(`"`,``).replace(`"`,``);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.httpClient.get<any>(this.urlHaven + "/api/haven/user", httpOptions);
  }

  getByid(id : String){
    const token = localStorage.getItem('token')?.replace(`"`,``).replace(`"`,``);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.httpClient.get<any>(`${this.urlHaven}/api/haven/${id}`, httpOptions);
  }

  getHavens(){
    return this.httpClient.get<any>(this.urlHaven + "/api/haven");
  }

  delete(id:String){
    const token = localStorage.getItem('token')?.replace(`"`,``).replace(`"`,``);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.httpClient.delete(`${this.urlHaven}/api/haven/${id}`, httpOptions);
  }

}
