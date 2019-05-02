import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
url = 'http://localhost:3000/api/';
token;
headers = new HttpHeaders();
  constructor( private http: HttpClient ) {
    // tslint:disable-next-line:quotemark
    this.headers.append("Access-Control-Allow-Origin", "*");
    // tslint:disable-next-line:quotemark
    this.headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    }
  }
  validarUsuario(email: string, password: string) {
    return this.http.post(`${ this.url }usuario/validate`, {email, contrasena: password}, { headers: this.headers });
  }

  isUser( token ) {
    return this.http.post<boolean>(`${ this.url }usuario/isuser`, {token}, { headers: this.headers })
    .pipe( map( (resp: any) => resp.ok ) )
    .toPromise();
  }


}
