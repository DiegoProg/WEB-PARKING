import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionContenidoComponent } from './funcionalidad_diego/gestion-contenido/gestion-contenido.component';
import { ActualizarLogoComponent } from './funcionalidad_diego/actualizar-logo/actualizar-logo.component';
const routes: Routes = [

  {path: '', component: ActualizarLogoComponent},
  {path: 'Gestion', component: GestionContenidoComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
