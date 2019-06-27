import { Component, OnInit } from '@angular/core';

import {EventoService} from '../../services/evento.service';
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Evento } from '../../models/evento';

declare var M: any;

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
  providers: [EventoService]
})
export class EventosComponent implements OnInit {

  constructor(private eventoService: EventoService) { }

  ngOnInit() {
    this.getEventos();
  }

  addEvento(form: NgForm){
    if(form.value._id){
      this.eventoService.putEvento(form.value).subscribe(res=>{
        this.resetForm(form);
        M.toast({html: '¡El registro se actualizo exitosamente!'});
        this.getEventos();
      });   
    }else{
      this.eventoService.postEvento(form.value)
    .subscribe(res=>{
      this.resetForm(form);
      M.toast({html: 'Registro éxitoso!'});
      this.getEventos();
    });
  }
}
    

  getEventos(){
    this.eventoService.getEventos()
    .subscribe(res=>{
      this.eventoService.eventos = res as Evento[];
      console.log(res);
    });
  }

  editEvento(evento: Evento){
    this.eventoService.selectedEvento = evento;
  }

  deleteEvento(_id: string){
    if(confirm('¿Estás seguro de que quieres eliminar el registro?')){
      this.eventoService.deleteEvento(_id)
    .subscribe(res=>{
      this.getEventos();
      M.toast({html: 'Registro eliminado'});
    });
     
    }
    
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.eventoService.selectedEvento = new Evento();
    }
  }
}
