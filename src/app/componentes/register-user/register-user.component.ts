import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Email } from '../../validators/validators';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
forma: FormGroup;
  constructor( private formBuilder: FormBuilder ) {
    this.forma = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: [
        '',
        [
          Validators.email,
          Validators.required
      ]
      ],
      contrasena: [ '', Validators.required ],
      reContrasena: [ '', Validators.required ]
    });
  }

  ngOnInit() {
  }

  registro() {
    console.log( this.forma.value );
  }

}
