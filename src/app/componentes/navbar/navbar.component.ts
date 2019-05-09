import Swal from 'sweetalert2';
import { UsuarioService } from './../../servicios/usuario.service';
import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Storage } from 'src/app/libs/storage';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // @ViewChild('#dropdownMenu1') btnDrop;
  public formGroup: FormGroup;
  usuario;
  notif;
  storage = new Storage();
  constructor( private usuarioService: UsuarioService,
               private modalService: NgbModal,
               private formBuilder: FormBuilder,
               private route: Router ) {

               }

  public ngOnInit() {
    this.buildForm();
    if ( localStorage.getItem('user') ) {
      this.usuario = JSON.parse( localStorage.getItem('user') );
    }
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.email] ],
      password: ['', Validators.required]
    });
  }

  openModal( content ) {
    // console.log(content._parentView.component.modalService._modalStack._document.childNodes);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
    .result.then((result) => {
      // console.log(result);
    });
  }

  logIn() {
    // tslint:disable-next-line:no-unused-expression
    const email = this.formGroup.value.email;
    const password = this.formGroup.value.password;
    // tslint:disable-next-line:no-unused-expression
    if ( email && password ) {
      this.usuarioService.validarUsuario(email, password)
      .subscribe( (resp: any) => {
        if ( resp.token ) {
          localStorage.removeItem('token');
          localStorage.setItem('token', resp.token );
        }
        this.route.navigate(['/usuario']);
        console.log( resp );
      }, err => {
        if ( err.error ) {
          Swal.fire({
            type: 'error',
            title: 'Error',
            text: err.error.message
          });
        }
      });
    }
  }
}

