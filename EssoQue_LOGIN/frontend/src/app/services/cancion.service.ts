import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Cancion } from '../models/cancion';
import {CancionesComponent} from '../components/canciones/canciones.component';

@Injectable({
  providedIn: 'root'
})
export class CancionService {

  selectedCancion : Cancion;
  canciones: Cancion[];
  readonly URL_API = 'http://localhost:3000/api/canciones';

  constructor(private http: HttpClient) { 
    this.selectedCancion= new Cancion();
  }

  getCanciones(){
    return this.http.get(this.URL_API);
  }

  postCancion(Cancion: Cancion){
    return this.http.post(this.URL_API, Cancion);
  }

  putCancion(cancion: Cancion){
    return this.http.put(this.URL_API + `/${cancion._id}`, cancion);
  }

  deleteCancion(_id: String){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
