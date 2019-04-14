import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from 'src/app/servicios/data-service.service';

@Component({
  selector: 'app-productos-child',
  templateUrl: './productos-child.component.html',
  styleUrls: ['./productos-child.component.css']
})
export class ProductosChildComponent implements OnInit {
// tslint:disable-next-line:no-input-rename
@Input('producto') item: any;
id: string;
  constructor( private params: ActivatedRoute,
               private  dataService: DataServiceService ) {
    /* Obtener el parametro URL */
    const id = this.params.snapshot.params.id;
    if ( id ) {
      this.id = id;
    }
  }

  ngOnInit() {
  }

}
// export interface Producto {
//   nombre: string;
//   stock: Number;
//   precio: Number;
//   fecha_abasto: Date;

// }