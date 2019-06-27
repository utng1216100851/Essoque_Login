import { Component, OnInit } from '@angular/core';

import {CancionService} from '../../services/cancion.service';
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Cancion } from '../../models/cancion';

declare var M: any;

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.css'],
  providers: [CancionService]
})
export class CancionesComponent implements OnInit {

  constructor(private cancionService: CancionService) { }

  ngOnInit() {
    this.getCanciones();
  }

  addCancion(form: NgForm){
    if(form.value._id){
      this.cancionService.putCancion(form.value).subscribe(res=>{
        this.resetForm(form);
        M.toast({html: '¡El registro se actualizo exitosamente!'});
        this.getCanciones();
      });   
    }else{
      this.cancionService.postCancion(form.value)
    .subscribe(res=>{
      this.resetForm(form);
      M.toast({html: 'Registro éxitoso!'});
      this.getCanciones();
    });
  }
}
    

  getCanciones(){
    this.cancionService.getCanciones()
    .subscribe(res=>{
      this.cancionService.canciones = res as Cancion[];
      console.log(res);
    });
  }

  editCancion(cancion: Cancion){
    this.cancionService.selectedCancion = cancion;
  }

  deleteCancion(_id: string){
    if(confirm('¿Estás seguro de que quieres eliminar el registro?')){
      this.cancionService.deleteCancion(_id)
    .subscribe(res=>{
      this.getCanciones();
      M.toast({html: 'Registro eliminado'});
    });
     
    }
    
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.cancionService.selectedCancion = new Cancion();
    }
  }
}
