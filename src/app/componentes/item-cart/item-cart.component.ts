import { FormBuilder, FormGroup } from '@angular/forms';
import { Cart, ItemProducto } from './../../libs/item.producto';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { StorageService } from 'src/app/servicios/storage.service';

@Component({
  selector: 'app-item-cart',
  templateUrl: './item-cart.component.html',
  styleUrls: ['./item-cart.component.css']
})
export class ItemCartComponent implements OnInit {
@Output() deleteCart = new EventEmitter();
@Input() producto: Cart;
cantidad = 0;
forma: FormGroup;
totalProd;
  constructor( private storage: StorageService,
               private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.cantidad = this.producto.cantidad;
    this.forma = this.formBuilder.group({
      cantidad: [this.cantidad]
    });
    this.totalProd = this.cantidad * Number(this.producto.items.precio);
  }

  updateCart( ) {
    console.log(this.forma.value);
    const cantidad = this.forma.value.cantidad;
     if ( cantidad !== this.producto.cantidad ) {
       this.storage.updateCart( this.producto, this.producto.items, cantidad );
     }
  }

  deleteFromCart( item: Cart ) {
    // TODO: Eliminar del carrito
   this.storage.deleteItem( item );
   // this.productos = this.productos.filter( cartItem => item.id !== cartItem.id);
   this.deleteCart.emit(item.id);
  }

}
