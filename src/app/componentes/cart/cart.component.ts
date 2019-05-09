import { Cart, ItemProducto } from './../../libs/item.producto';
import { StorageService } from 'src/app/servicios/storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
productos: Cart[] = [];
loading = false;
  constructor( private storage: StorageService) { }

  ngOnInit() {
    this.loading = true;
    this.cargarCart();
  }

  deleteCart(item_id) {
    this.productos = this.productos.filter( cart => cart.id !== item_id );
  }

  cargarCart() {
    this.storage.getStorage()
    .then( (resp: Cart[]) => {
      this.loading = false;
      this.productos = resp;
     })
    .catch( err => console.log(err));
  }
}
