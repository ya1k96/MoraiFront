import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ItemProducto } from '../libs/item.producto';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
url = 'http://localhost:3000/api';
headers = new HttpHeaders();
  constructor( private http: HttpClient ) {
    // tslint:disable-next-line:quotemark
    this.headers.append("Access-Control-Allow-Origin", "*");
    // tslint:disable-next-line:quotemark
    this.headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  }

  getParticipantes() {
    return this.http.get( `${this.url}/participantes`, { headers: this.headers } )
    .pipe( map( (resp: any) => resp.data ) );
  }

  getProductos() {
    return this.http.get<ItemProducto[]>( `${this.url}/producto/get`, { headers: this.headers })
    .pipe( map( (resp: any) => resp.productos ) );
  }

  getProducto( id: string ) {
    return this.http.get( `${this.url}/producto/getOne/${id}`, { headers: this.headers })
    .pipe( map( (resp: any) => resp.producto ) );
  }
}
