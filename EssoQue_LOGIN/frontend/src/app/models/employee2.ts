export class Employee2 {

    constructor(_id='',nombre='',insignia='',color='',fecha=null,areaCa='',miniTecNudos='',
    miniTecAmarres='',destresa1='',destresa2='',destresa3='',archivoEvidencia=null,seccion = ''){
        this._id = _id;
        this.insignia=insignia;
        this.color = color;
        this.fecha = fecha;
        this.nombre = nombre;
        this.areaCa = areaCa;
        this.miniTecNudos = miniTecNudos;
        this.miniTecAmarres=miniTecAmarres;
        this.destresa1=destresa1;
        this.destresa2=destresa2;
        this.destresa3=destresa3;
        this.archivoEvidencia=archivoEvidencia; 
        this.seccion=seccion;     
    }
    _id: string;
    insignia:string;
    color:string;
    fecha:Date;
    nombre:string;
    areaCa:string;
    miniTecNudos:string;
    miniTecAmarres:string;
    destresa1:string;
    destresa2:string;
    destresa3:string;
    archivoEvidencia:string;
    seccion:string;
   
    
}
