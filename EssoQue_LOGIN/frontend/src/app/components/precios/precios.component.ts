import { Component, OnInit } from '@angular/core';

import {PrecioService} from '../../services/precio.service';
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Precio } from '../../models/precio';

declare var M: any;

@Component({
  selector: 'app-precios',
  templateUrl: './precios.component.html',
  styleUrls: ['./precios.component.css'],
  providers: [PrecioService]
})
export class PreciosComponent implements OnInit {

  constructor(private precioService: PrecioService) { }

  ngOnInit() {
    this.getPrecios();
  }

  addPrecio(form: NgForm){
    if(form.value._id){
      this.precioService.putPrecio(form.value).subscribe(res=>{
        this.resetForm(form);
        M.toast({html: '¡El registro se actualizo exitosamente!'});
        this.getPrecios();
      });   
    }else{
      this.precioService.postPrecio(form.value)
    .subscribe(res=>{
      this.resetForm(form);
      M.toast({html: 'Registro éxitoso!'});
      this.getPrecios();
    });
  }
}
    

  getPrecios(){
    this.precioService.getPrecios()
    .subscribe(res=>{
      this.precioService.precios = res as Precio[];
      console.log(res);
    });
  }

  editPrecio(precio: Precio){
    this.precioService.selectedPrecio = precio;
  }

  deletePrecio(_id: string){
    if(confirm('¿Estás seguro de que quieres eliminar el registro?')){
      this.precioService.deletePrecio(_id)
    .subscribe(res=>{
      this.getPrecios();
      M.toast({html: 'Registro eliminado'});
    });
     
    }
    
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.precioService.selectedPrecio = new Precio();
    }
  }
}

