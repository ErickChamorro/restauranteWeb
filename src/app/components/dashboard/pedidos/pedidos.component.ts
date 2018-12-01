import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/apis/api.service';
import {MatTableModule} from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  dataSource:any
  dataSource2:any
 
  displayedColumns2: string[] = ['id', 'numero', 'tipo'];
  pedidos: any=[];
  array: number;
  nuevoarray:any=[];
  constructor(private api: ApiService,private toastr: ToastrService) { 
    setInterval(()=>{
      this.listarpedidos()
    },3000)
    this.listarpedidos()
    this.listarMesas()
  }

  ngOnInit() {

   
      
    

  }

  aceptar(id){
    this.api.aceptar(id).subscribe(apiData=>{
      this.toastr.success('Pedido aceptado con exito', 'Pedido Aceptado');
    })
  }

  pedido(){
    this.toastr.success('Tienes un nuevo Pedido', 'Nuevo pedido');
  }

  verficarpedido(){
    let conta = 1
    if(this.array == 0){
      
    }
    else if (this.array== 1){
      if(conta==1){
        this.toastr.success('Tienes un nuevo Pedido', 'Nuevo pedido');
      }
      conta++
    }
  }


  listarpedidos(){
    
    this.api.ListarPedidos().subscribe(apiData=>{
      this.pedidos=apiData[0].mesa1
      if(this.nuevoarray.length > this.pedidos.length ){
        console.log("entro al condicon 1")
        this.toastr.success('Se elimino el pedido', 'pedido Cancelado');
        this.nuevoarray.length = this.pedidos.length
      }else if(this.nuevoarray.length < this.pedidos.length){
        console.log("entro al condicon 2")
        this.toastr.success('Tienes un nuevo Pedido', 'Nuevo pedido');
        this.nuevoarray.length = this.pedidos.length
      } else{
        console.log("no hay cambios :V")
        
      }
    },erro=>{
      this.pedidos=[]
      this.nuevoarray=[]
      let body = JSON.parse(erro['_body'])
      console.log(parseInt(body.code))
      this.array=parseInt(body.code)

    }) 
  }

  listarMesas(){
    this.api.ListarMesas().subscribe(apiData=>{
       this.dataSource2 = apiData.Mesas
      console.log(apiData)
    })
  }

}
