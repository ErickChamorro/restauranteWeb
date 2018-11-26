import { Component, OnInit } from '@angular/core';
import { FuncionesService } from 'src/app/servicios/funciones.service';
import { FormBuilder, FormGroup } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  ofertas_form: FormGroup;
  constructor(public funciones: FuncionesService, private formBuilder: FormBuilder) {
    this.ofertas_form = this.formBuilder.group({
      producto: [],
      precio: [],
      imagen: [],
      descripcion: []
    });
  }

  ngOnInit() {
    this.funciones.ver_nombre_imagen();
  }

  submit_handler() {
    console.log(this.ofertas_form.value);
  }
}
