import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* Bootstrap Modulo */
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

/* Form */
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ServicesComponent } from './componentes/services/services.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ProductosChildComponent } from './componentes/productos-child/productos-child.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { CartComponent } from './componentes/cart/cart.component';
import { ItemCartComponent } from './componentes/item-cart/item-cart.component';
import { RegisterUserComponent } from './componentes/register-user/register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ServicesComponent,
    FooterComponent,
    ProductosComponent,
    ProductosChildComponent,
    UsuarioComponent,
    CartComponent,
    ItemCartComponent,
    RegisterUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
