import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OfertasComponent } from './components/dashboard/ofertas/ofertas.component';
import { ListaofertasComponent } from './components/dashboard/listaofertas/listaofertas/listaofertas.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'dashboard', component: NavbarComponent,
children: [
  {path: '', component: DashboardComponent },
  {path: 'gestionar_ofertas', component: OfertasComponent },
  {path: 'lista_de_ofertas', component: ListaofertasComponent }
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
