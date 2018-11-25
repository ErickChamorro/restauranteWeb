import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    ListabebidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [NavbarComponent, FuncionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
