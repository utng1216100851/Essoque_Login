export class Precio {

    constructor(_id = '', municipio = '', comunidad = '', escenario = '', precio = 0){
        this._id = _id;
        this.municipio = municipio;
        this.comunidad = comunidad;
        this.escenario = escenario;
        this.precio = precio;
    }

    _id: string;
    municipio: string;
    comunidad: string;
    escenario: string;
    precio: Number;
}
