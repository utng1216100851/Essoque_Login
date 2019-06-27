import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Precio } from '../models/precio';
import {PreciosComponent} from '../components/precios/precios.component';

@Injectable({
  providedIn: 'root'
})
export class PrecioService {

  selectedPrecio : Precio;
  precios: Precio[];
  readonly URL_API = 'http://localhost:3000/api/precios';

  constructor(private http: HttpClient) { 
    this.selectedPrecio= new Precio();
  }

  getPrecios(){
    return this.http.get(this.URL_API);
  }

  postPrecio(Precio: Precio){
    return this.http.post(this.URL_API, Precio);
  }

  putPrecio(precio: Precio){
    return this.http.put(this.URL_API + `/${precio._id}`, precio);
  }

  deletePrecio(_id: String){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
