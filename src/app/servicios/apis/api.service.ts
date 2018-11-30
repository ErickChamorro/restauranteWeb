import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // ip = 'http://192.168.1.136'; // si usarás ésta ip, agrega "/laravel/restaurante1/public" a la ruta, antes de "/api/login"
  ip = 'http://127.0.0.1:8000'; // si usarás ésta ip, asegurate de quitar "/laravel/restaurante1/public"
  // ACTIVAR EL CORS

  getQuery( 
		query: string, 
		type: string, // get, post, put ...
		authorization: boolean, 
		body?: any, // optional parameter  
	) {
    const url = `http://192.168.1.16:8000/${ query }`; 
    
    
		let headers = new Headers({ 'Content-Type': 'application/json' });
			headers.append('Accept', 'application/json');
			if( authorization )
				headers.append('Authorization', "Bearer "+localStorage.getItem( 'token' ));

		let options = new RequestOptions({ headers: headers });

		if ( type == 'get' ) 
			return this.http.get( url, options );	

		else if ( type == 'post' )
			return this.http.post( url, body, options );	

		else
			return this.http.put( url, body, options );	
	}
  
  constructor(private http: Http, public router: Router) { }

  //Login
  login(data) {
    return this.getQuery('api/login', 'post' , true, data)
		.pipe(map(apiData => JSON.parse(apiData['_body'])))
  }


//listar Pedidos
  ListarPedidos(){
    return this.getQuery('api/mostrarPedidos', 'get' , true)
		.pipe(map(apiData => JSON.parse(apiData['_body'])))
  }

  //Listar Mesas
  ListarMesas(){
    return this.getQuery('api/getMesas', 'get' , true)
		.pipe(map(apiData => JSON.parse(apiData['_body'])))
  }

  CrearPlato(data){
    return this.getQuery('api/tipo_plato', 'post' , true, data)
		.pipe(map(apiData => JSON.parse(apiData['_body'])))
  }



}
