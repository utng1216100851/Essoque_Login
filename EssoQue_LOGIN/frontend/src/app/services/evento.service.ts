import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Evento } from '../models/evento';
import {EventosComponent} from '../components/eventos/eventos.component';

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  selectedEvento : Evento;
  eventos: Evento[];
  readonly URL_API = 'http://localhost:3000/api/eventos';

  constructor(private http: HttpClient) { 
    this.selectedEvento= new Evento();
  }

  getEventos(){
    return this.http.get(this.URL_API);
  }

  postEvento(Evento: Evento){
    return this.http.post(this.URL_API, Evento);
  }

  putEvento(evento: Evento){
    return this.http.put(this.URL_API + `/${evento._id}`, evento);
  }

  deleteEvento(_id: String){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
