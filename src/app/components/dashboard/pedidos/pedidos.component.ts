import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/servicios/apis/api.service';
import {MatTableModule} from '@angular/material/table';
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  dataSource:any
  dataSource2:any
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns2: string[] = ['id', 'numero', 'tipo'];
  constructor(private api: ApiService) { 
    this.listarpedidos()
    this.listarMesas()
  }

  ngOnInit() {
  }

  listarpedidos(){
    this.api.ListarPedidos().subscribe(apiData=>{
      console.log(apiData)
    }) 
  }

  listarMesas(){
    this.api.ListarMesas().subscribe(apiData=>{
       this.dataSource2 = apiData.Mesas
      console.log(apiData)
    })
  }

}
