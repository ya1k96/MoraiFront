import { UsuarioService } from './../../servicios/usuario.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { subscribeOn } from 'rxjs/operators';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // @ViewChild('#dropdownMenu1') btnDrop;
  public formGroup: FormGroup;

  constructor( private usuarioService: UsuarioService,
               private modalService: NgbModal,
               private formBuilder: FormBuilder ) { }

  public ngOnInit() {
    this.buildForm();
  }

  private buildForm() {
    this.formGroup = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.email] ],
      password: ['', Validators.required]
    });
  }

  openModal( content ) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'})
    .result.then((result) => {
      console.log(result);
    });
  }

  logIn() {
    // tslint:disable-next-line:no-unused-expression
    const email = this.formGroup.value.email;
    const password = this.formGroup.value.password;

    if ( email && password ) {
      this.usuarioService.validarUsuario(email, password)
      .subscribe( resp => console.log( resp ));
    }
  }
}

