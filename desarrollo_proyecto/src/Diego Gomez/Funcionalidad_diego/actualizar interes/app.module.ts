import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrarUsuariosComponent } from './funcionalidad_diego/registrar-usuarios/registrar-usuarios.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginaPrincipalComponent } from './funcionalidad_diego/Pagina_principal/pagina-principal.component';
import { GestionContenidoComponent } from './funcionalidad_diego/gestion-contenido/gestion-contenido.component';
import { ActualizarLogoComponent } from './funcionalidad_diego/actualizar-logo/actualizar-logo.component';
import { ActualizarContactoComponent } from './funcionalidad_diego/actualizar-contacto/actualizar-contacto.component';
import { ActualizarInteresComponent } from './funcionalidad_diego/actualizar-interes/actualizar-interes.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  
  declarations: [
    AppComponent,
    RegistrarUsuariosComponent,
    PaginaPrincipalComponent,
    GestionContenidoComponent,
    ActualizarLogoComponent,
    ActualizarContactoComponent,
    ActualizarInteresComponent
  ],
  imports: [
    //NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
