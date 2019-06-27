export class Producto {

    constructor(_id = '', nombre = '', precio = 0, cantidad = 0, url = '', fecha = null){
        this._id = _id;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.url = url;
        this.fecha = fecha;
    }

    _id: string;
    nombre: string;
    precio: Number;
    cantidad: Number;
    url: string;
    fecha: Date;
}
