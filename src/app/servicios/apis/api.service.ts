import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // ip = 'http://192.168.1.136'; // si usarás ésta ip, agrega "/laravel/restaurante1/public" a la ruta, antes de "/api/login"
  ip = 'http://127.0.0.1:8000'; // si usarás ésta ip, asegurate de quitar "/laravel/restaurante1/public"
  // ACTIVAR EL CORS

  // ---------  HEADERS PARA LOS POST  -----------------
  public header_post: HttpHeaders = new HttpHeaders({
    Authorization: 'Access',
    'Content-Type': 'application/json'
  });

  // ---------  HEADERS PARA LOS GET   -----------------
  public headers_get: HttpHeaders = new HttpHeaders({
    Accept: 'application/json',
    Authorization: 'Bearer' + ' ' + localStorage.getItem('token')
  });

  constructor(public http: HttpClient, public router: Router) { }

  login(loginForm) {
    const api_url = `${this.ip}api/login`;
    return this.http.post(api_url, loginForm, { headers: this.header_post });
  }


}
