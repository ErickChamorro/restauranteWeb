import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from "@angular/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OfertasComponent } from './components/dashboard/ofertas/ofertas.component';
import { FuncionesService } from './servicios/funciones.service';
import { ListaofertasComponent } from './components/dashboard/listaofertas/listaofertas/listaofertas.component';
import { GestioncomidaComponent } from './components/dashboard/comida/gestioncomida/gestioncomida.component';
import { GestionbebidaComponent } from './components/dashboard/bebida/gestionbebida/gestionbebida.component';
import { ListabebidaComponent } from './components/dashboard/bebida/listabebida/listabebida.component';
import { ListacomidaComponent } from './components/dashboard/comida/listacomida/listacomida.component';
import { PedidosComponent } from './components/dashboard/pedidos/pedidos.component';
import { MaterialModule } from '../app/material'
import { ApiService } from './servicios/apis/api.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DashboardComponent,
    OfertasComponent,
    ListaofertasComponent,
    GestioncomidaComponent,
    GestionbebidaComponent,
    ListabebidaComponent,
    ListacomidaComponent,
    PedidosComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule
  ],
  
  providers: [NavbarComponent, FuncionesService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
