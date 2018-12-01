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
  form2: FormGroup;
  tipoplato: any=[];
  imagen: any;
  avatarToUpload: File = null;	
	defaultAvatar: String = 'assets/select.png';
	nombreCompleto = localStorage.getItem("nombreCompleto"); 
	imagenValidate: number; // 200 = fine, 300 = invalid format, 500 = invalid size
  selectedfile = null
  constructor(private api: ApiService, public funciones: FuncionesService) {
    this.obtenertiploPlato()
   }

   avatarUpload( file: FileList ) {
		this.imagenValidate = this.validarImagen( file[0] );

		if( this.imagenValidate == 200 ) {
			this.avatarToUpload = file.item(0);
			let reader = new FileReader();
			reader.onload = ( event:any ) => { this.defaultAvatar = event.target.result; }
			reader.readAsDataURL( this.avatarToUpload );
		} 
  }
  
  validarImagen( imagen: any ) {
		let type: any = imagen.type.toLowerCase();

		if( type == 'image/jpeg' || type == 'image/jpg' || type == 'image/png' ) {
			if( (imagen.size / 1024) / 1204 < 2 ) // menor a 2 MB
				return 200; // fine
			else
				return 500 // invalid size
		}

		else
			return 300; // invalid format
	}

  ngOnInit() {
    this.form = new FormGroup({
      tipoPlato: new FormControl('', Validators.required),
      nombrePlato: new FormControl('', Validators.required),
      Precio: new FormControl('', Validators.required),
      avatar: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
    });
    this.form2 = new FormGroup({  
      nombrePlato: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
    });
    this.funciones.ver_nombre_imagen();
  }

  obtenertiploPlato(){
    this.api.obtenertipoPLato().subscribe(apiData=>{
      console.log(apiData)
      this.tipoplato=apiData.tipo_plato
    })
  }

  crearTipoPlato(){
    let data = {
      nombre: this.form2.get('nombrePlato').value,
      descripcion: this.form2.get('descripcion').value,
    }
    this.api.CrearTipoPlato(data).subscribe(apiData=>{
      swal({
        title: 'Exito!',
        text: 'Se creo tipo de plato con exito',
        type: 'success',
        confirmButtonText: 'Cool'
      });
      this.obtenertiploPlato()
      this.form2.reset()
    })
  }
  crearPlato() {
    
  

    const data = {
      id_tipo_plato: this.form.get('tipoPlato').value,
      nombre: this.form.get('nombrePlato').value,
      precio: this.form.get('Precio').value,
      imagenplato: this.defaultAvatar,
      descripcion: this.form.get('descripcion').value,
    };
    console.log(this.defaultAvatar)

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
