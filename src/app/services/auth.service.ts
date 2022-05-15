import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { Registro } from '../models/registro';
import { Up } from '../models/up';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  // URL = 'https://apidazabi.azurewebsites.net/users';
  // URL = 'http://localhost:3000/users';
  URL = 'http://dazabi.azurewebsites.net';
  login(login: Login): Observable<Request> {
    return this.http.post<Request>(
      `${this.URL}/login`, login
    );
  }

  registro(registro: Registro): Observable<Request>{
    return this.http.post<Request>(
      `${this.URL}/users/`, registro
    );
  }

  update(id: number, up: Up){
    return this.http.put(
      `${this.URL}/users/${id}`, up
    );
  }

}
