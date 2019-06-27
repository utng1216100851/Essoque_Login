import { Component, OnInit } from '@angular/core';

import {AlbumService} from '../../services/album.service';
import { NgForOf } from '@angular/common';
import { NgForm } from '@angular/forms';
import { Album } from '../../models/album';

declare var M: any;

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css'],
  providers: [AlbumService]
})
export class AlbumesComponent implements OnInit {

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.getAlbumes();
  }

  addAlbum(form: NgForm){
    if(form.value._id){
      this.albumService.putAlbum(form.value).subscribe(res=>{
        this.resetForm(form);
        M.toast({html: '¡El registro se actualizo exitosamente!'});
        this.getAlbumes();
      });   
    }else{
      this.albumService.postAlbum(form.value)
    .subscribe(res=>{
      this.resetForm(form);
      M.toast({html: 'Registro éxitoso!'});
      this.getAlbumes();
    });
  }
}
    

  getAlbumes(){
    this.albumService.getAlbumes()
    .subscribe(res=>{
      this.albumService.albumes = res as Album[];
      console.log(res);
    });
  }

  editAlbum(album: Album){
    this.albumService.selectedAlbum = album;
  }

  deleteAAlbum(_id: string){
    if(confirm('¿Estás seguro de que quieres eliminar el registro?')){
      this.albumService.deleteAlbum(_id)
    .subscribe(res=>{
      this.getAlbumes();
      M.toast({html: 'Registro eliminado'});
    });
     
    }
    
  }

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.albumService.selectedAlbum = new Album();
    }
  }
}
