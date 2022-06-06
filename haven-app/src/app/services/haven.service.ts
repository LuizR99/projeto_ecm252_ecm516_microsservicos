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

  getHavens(){
    return this.httpClient.get<any>(this.urlHaven + "/api/haven");
  }
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

}
btoa