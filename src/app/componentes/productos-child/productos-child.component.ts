import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { DataServiceService } from 'src/app/servicios/data-service.service';
import Swal from 'sweetalert2';
import { StorageService } from 'src/app/servicios/storage.service';
import { ItemProducto } from 'src/app/libs/item.producto';
@Component({
  selector: 'app-productos-child',
  templateUrl: './productos-child.component.html',
  styleUrls: ['./productos-child.component.css']
})
export class ProductosChildComponent implements OnInit {
// tslint:disable-next-line:no-input-rename
item: ItemProducto;
id: string;
public forma: FormGroup;
  constructor( private params: ActivatedRoute,
               private  dataService: DataServiceService,
               private storage: StorageService,
               private formBuilder: FormBuilder ) {
    /* Obtener el parametro URL */
    const id = this.params.snapshot.params.id;
    if ( id ) {
      this.id = id;
      this.dataService.getProducto(id)
        .subscribe( (resp: any) => this.item = resp );
    }
  }

  ngOnInit() {
    this.forma = this.formBuilder.group({
      cantidad: [1, [ Validators.required] ]
    });
  }

  addToCart() {
    console.log( this.forma.value );
    const cantidad = this.forma.value.cantidad;
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons.fire({
      title: '?',
      text: 'Estas seguro que quieres añadirlo?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true
    }).then((result) => {
      // TODO: Añadir al carrito
      this.storage.addCart(this.item, cantidad);
      if (result.value) {
        swalWithBootstrapButtons.fire(
          'Ok',
          `Añadiste ${this.item.nombre}`,
          'success'
        );
      }
      // } else if (
      //   // Read more about handling dismissals
      //   result.dismiss === Swal.DismissReason.cancel
      // ) {
      //   swalWithBootstrapButtons.fire(
      //     'Cancelado',
      //     'Ok',
      //     'error'
      //   );
      // }
    });
  }
}
// export interface Producto {
//   nombre: string;
//   stock: Number;
//   precio: Number;
//   fecha_abasto: Date;

// }
