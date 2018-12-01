import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { ApiService } from 'src/app/servicios/apis/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert2';
import { FuncionesService } from '../../../../servicios/funciones.service';
@Component({
  selector: 'app-gestioncomida',
  templateUrl: './gestioncomida.component.html',
  styleUrls: ['./gestioncomida.component.css']
})
export class GestioncomidaComponent implements OnInit {
  form: FormGroup;
  constructor(private api: ApiService, public funciones: FuncionesService) { }

  ngOnInit() {
    this.form = new FormGroup({
      tipoPlato: new FormControl('', Validators.required),
      nombrePlato: new FormControl('', Validators.required),
      Precio: new FormControl('', Validators.required),
      Img: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
    });
    this.funciones.ver_nombre_imagen();
  }

  crearPlato() {
    const data = {
      id_tipo_plato: this.form.get('tipoPlato').value,
      nombre: this.form.get('nombrePlato').value,
      precio: this.form.get('Precio').value,
      imagenplato: this.form.get('Img').value,
      descripcion: this.form.get('descripcion').value,
    };

    this.api.CrearPlato(data).subscribe(apiData => {
      console.log(apiData);
      swal({
        title: 'Exito!',
        text: 'Se creo con exito',
        type: 'success',
        confirmButtonText: 'Cool'
      });
      // resetear los datos apenas se haya enviado.
      this.form.reset();
    });

  }

}
