import { Component, OnInit } from '@angular/core';
import { FuncionesService } from 'src/app/servicios/funciones.service';
declare var $: any;
@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  constructor(private funciones: FuncionesService) {}

  ngOnInit() {
    this.funciones.ver_nombre_imagen();
  }
}
