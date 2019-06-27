export class Evento {

    constructor(_id = '', lugar = '', escenario = '', tipo = '', fecha = null){
        this._id = _id;
        this.lugar = lugar;
        this.escenario = escenario;
        this.tipo = tipo;
        this.fecha = fecha;
    }

    _id: string;
    lugar: string;
    escenario: string;
    tipo: string;
    fecha: Date;
}
