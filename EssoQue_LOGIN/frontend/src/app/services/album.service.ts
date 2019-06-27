import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Album } from '../models/album';
import {AlbumesComponent} from '../components/albumes/albumes.component';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  selectedAlbum : Album;
  albumes: Album[];
  readonly URL_API = 'http://localhost:3000/api/albumes';

  constructor(private http: HttpClient) { 
    this.selectedAlbum= new Album();
  }

  getAlbumes(){
    return this.http.get(this.URL_API);
  }

  postAlbum(Album: Album){
    return this.http.post(this.URL_API, Album);
  }

  putAlbum(album: Album){
    return this.http.put(this.URL_API + `/${album._id}`, album);
  }

  deleteAlbum(_id: String){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
