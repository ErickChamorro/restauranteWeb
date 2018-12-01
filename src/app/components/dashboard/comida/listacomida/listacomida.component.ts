import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/servicios/apis/api.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-listacomida',
  templateUrl: './listacomida.component.html',
  styleUrls: ['./listacomida.component.css']
})
export class ListacomidaComponent implements OnInit {
  form:FormGroup
  mesas: any=[];
  constructor(private api: ApiService) { 
    this.getmesasxd()
  }

  ngOnInit() {
    
    this.form = new FormGroup({
      numeromesa: new FormControl('', Validators.required),
      tipomesa: new FormControl('', Validators.required),
    });
  }

  getmesasxd(){
    this.api.getmesas().subscribe(apiData=>{
      console.log(apiData)
      this.mesas=apiData.Mesas
    })
  }

  CrearMesa(){
    let data = {
      num_mesa:this.form.get("numeromesa").value,
      tipo_mesa:this.form.get("tipomesa").value
    }
    this.api.CreateMesa(data).subscribe(apiData=>{
      swal({
        title: 'Exito!',
        text: 'Se creo Mesa con exito',
        type: 'success',
        confirmButtonText: 'Cool'
      });
      this.form.reset()
      this.getmesasxd()
    })
  }

}
