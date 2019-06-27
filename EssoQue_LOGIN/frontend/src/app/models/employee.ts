export class Employee {

    constructor(_id='',nombre='',seccion='',cum=''){
        this._id = _id;
        this.nombre=nombre;
        this.seccion = seccion;
        this.cum = cum;
      
    }

    _id: string;
    nombre:string;
    seccion:string;
    cum:string;
   

}
