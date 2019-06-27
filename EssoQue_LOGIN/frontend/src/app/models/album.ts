export class Album{

    constructor(_id = '', nombre = '', fecha = null){
        this._id = _id;
        this.nombre = nombre;

        this.fecha = fecha;
    }

    _id: string;
    nombre: string;
    fecha: Date;
}
