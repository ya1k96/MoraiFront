import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
url = 'http://localhost:3000/api/';

  constructor( private http: HttpClient ) { }
  validarUsuario(email: string, password: string) {

    const headers = new HttpHeaders();
    // tslint:disable-next-line:quotemark
    headers.append("Access-Control-Allow-Origin", "*");
    // tslint:disable-next-line:quotemark
    headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    return this.http.post(`${ this.url }usuario/validate`, {email, contrasena: password}, { headers });
  }
}
