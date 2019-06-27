export class Cancion{

    constructor(_id = '', nombre = '', artista = '', album = '', url = '', fecha = null){
        this._id = _id;
        this.nombre = nombre;
        this.artista = artista;
        this.album = album;
        this.url = url;
        this.fecha = fecha;
    }

    _id: string;
    nombre: string;
    artista: string;
    album: string;
    url: string;
    fecha: Date;
}
