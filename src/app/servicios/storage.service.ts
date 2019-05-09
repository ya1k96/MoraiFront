import { Injectable } from '@angular/core';
import { ItemProducto, Cart } from '../libs/item.producto';
import { UUID } from 'angular2-uuid';
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
    if ( !localStorage.getItem('cart') ) {
      localStorage.setItem('cart', '');
    }
  }

  getStorage() {
    const st = localStorage.getItem('cart');
    return new Promise<Cart[]>((resolve, reject) => {
      if (st !== '') {
        const cart = JSON.parse(st);
        resolve(cart);
      }

      if ( st.length === 0 ) {
        resolve([]);
      }

      reject('Error');
    });
  }

  async deleteItem( item: Cart ) {
    const cart: Cart[] = await this.getStorage();
    if ( cart ) {
      const newCart = cart.filter( carrito => carrito.id !== item.id );
      localStorage.setItem('cart', JSON.stringify(newCart));
    }
  }

  async addCart( producto: ItemProducto, cantidad: number ) {
    const cart: Cart[] = await this.getStorage();

    return new Promise((resolve, reject) => {
      if (cart.length > 0) {
        // let existe = false;

        // cart.map( el => {
        //   if (el.id === item._id) {
        //     existe = true;
        //   }
        // });

        if (true) {
          const uuid = UUID.UUID();
          const nuevoItem: Cart = {
            id: uuid,
            cantidad: cantidad,
            items: producto
          };

          cart.push(nuevoItem);
          localStorage.setItem('cart', JSON.stringify(cart));
        }

      } else {
        const uuid = UUID.UUID();
        const carrito: Cart = {
          cantidad: cantidad,
          id: uuid,
          items: producto
        };
        const nuevo = JSON.stringify([carrito]);

        localStorage.setItem('cart', nuevo);
      }
    });
  }
  async updateCart( item: Cart, producto = item.items, cantidad = item.cantidad ) {
    const cart: Cart[] = await this.getStorage();
    const newCart: Cart[] = [];
    if ( cart ) {
      cart.map( carrito => {
        if ( carrito.id === item.id ) {
          carrito.cantidad = cantidad;
          carrito.items = producto;
        }
        newCart.push( carrito );
      });
      localStorage.setItem('cart', JSON.stringify(newCart));
    }
  }
}
