import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
url = 'http://localhost:3000/api/participantes';
  constructor( private http: HttpClient ) { }

  getParticipantes() {
    const headers = new HttpHeaders();
    // tslint:disable-next-line:quotemark
    headers.append("Access-Control-Allow-Origin", "*");
    // tslint:disable-next-line:quotemark
    headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

    return this.http.get( this.url, { headers: headers } )
    .pipe( map( (resp: any) => resp.data ) );
  }
}
