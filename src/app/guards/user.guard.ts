import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UsuarioService } from '../servicios/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  token;
  constructor( private service: UsuarioService, private router: Router ) {
    this.verify();
  }

  verify() {
    if ( !localStorage.getItem('token') ) {
      window.alert('No autorizado');
      this.router.navigate(['/']);
    }
    this.token = localStorage.getItem('token');
  }

  canActivate(): Promise<boolean> {
    this.service.isUser(this.token).catch( err => {
      window.alert('Ha ocurrido un error inesperado');
      location.href = '/';
    });
    return this.service.isUser(this.token);
  }
}
