import { Component, OnInit } from '@angular/core';

import {ProductoService} from '../../services/producto.service';
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Producto } from '../../models/producto';

declare var M: any;

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers: [ProductoService]
})
export class ProductosComponent implements OnInit {

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.getProductos();
  }

  addProducto(form: NgForm){
    if(form.value._id){
      this.productoService.putProducto(form.value).subscribe(res=>{
        this.resetForm(form);
        M.toast({html: '¡El registro se actualizo exitosamente!'});
        this.getProductos();
      });   
    }else{
      this.productoService.postProducto(form.value)
    .subscribe(res=>{
      this.resetForm(form);
      M.toast({html: 'Registro éxitoso!'});
      this.getProductos();
    });
  }
}
    

  getProductos(){
    this.productoService.getProductos()
    .subscribe(res=>{
      this.productoService.productos = res as Producto[];
      console.log(res);
    });
  }

  editProducto(producto: Producto){
    this.productoService.selectedProducto = producto;
  }

  deleteProducto(_id: string){
    if(confirm('¿Estás seguro de que quieres eliminar el registro?')){
      this.productoService.deleteProducto(_id)
    .subscribe(res=>{
      this.getProductos();
      M.toast({html: 'Registro eliminado'});
    });
     
    }
    
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.productoService.selectedProducto = new Producto();
    }
  }
}
