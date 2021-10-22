import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

 declare var  mensaje1:any;
 declare var  vectorcompleto:any;

@Component({
  selector: 'app-actualizar-interes',
  templateUrl: './actualizar-interes.component.html',
  styleUrls: ['./actualizar-interes.component.scss']
})
export class ActualizarInteresComponent implements OnInit {

  
  datosformulario = new FormGroup({
    sexo_usuario: new FormControl(''),
    nombre_usuario: new FormControl(''),
    correo_usuario: new FormControl(''),
    user_name: new FormControl(''),
    password: new FormControl(''),

  });
   

  Actualizar(){
   alert("Informacion Actualizada");

    

  }
  
  constructor() { }

  ngOnInit(): void {
  }

}