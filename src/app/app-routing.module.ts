import { CartComponent } from './componentes/cart/cart.component';
import { ProductosChildComponent } from './componentes/productos-child/productos-child.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { ServicesComponent } from './componentes/services/services.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './componentes/productos/productos.component';
import { UserGuard } from './guards/user.guard';
import { RegisterUserComponent } from './componentes/register-user/register-user.component';

const routes: Routes = [
  { path: '', component: ServicesComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/:id', component: ProductosChildComponent },
  { path: 'cart', component: CartComponent},
  { path: 'usuario', component: UsuarioComponent, canActivate: [ UserGuard ] },
  { path: 'registro', component: RegisterUserComponent },
  { path: '**', pathMatch: 'full', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
