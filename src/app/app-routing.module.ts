import { ServicesComponent } from './componentes/services/services.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductosComponent } from './componentes/productos/productos.component';

const routes: Routes = [
  { path: '', component: ServicesComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'productos/:id', component: ProductosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
