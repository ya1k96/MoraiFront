import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/servicios/data-service.service';
import { ProductosChildComponent } from '../productos-child/productos-child.component';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
productos = [];
producto: any;
loading: boolean;
  constructor( private dataService: DataServiceService,
               private params: ActivatedRoute ) { }

  ngOnInit() {
      this.loading = true;
      this.dataService.getProductos()
      .subscribe( (resp: any) => {
        this.productos = resp;
        this.loading = false;
      });
    }

}

