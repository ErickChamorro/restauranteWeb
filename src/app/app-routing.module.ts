import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OfertasComponent } from './components/dashboard/ofertas/ofertas.component';
import { ListaofertasComponent } from './components/dashboard/listaofertas/listaofertas/listaofertas.component';
import { GestioncomidaComponent } from './components/dashboard/comida/gestioncomida/gestioncomida.component';
import { GestionbebidaComponent } from './components/dashboard/bebida/gestionbebida/gestionbebida.component';
import { ListacomidaComponent } from './components/dashboard/comida/listacomida/listacomida.component';
import { ListabebidaComponent } from './components/dashboard/bebida/listabebida/listabebida.component';
import { PedidosComponent } from './components/dashboard/pedidos/pedidos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dashboard', component: NavbarComponent,
children: [
  {path: '', component: DashboardComponent },
  {path: 'gestionar_ofertas', component: OfertasComponent },
  {path: 'lista_de_ofertas', component: ListaofertasComponent },
  {path: 'gestionar_comida', component: GestioncomidaComponent },
  {path: 'lista_de_comida', component: ListacomidaComponent },
  {path: 'gestionar_bebida', component: GestionbebidaComponent },
  {path: 'lista_de_bebida', component: ListabebidaComponent },
  {path: 'pedidos', component: PedidosComponent }
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
