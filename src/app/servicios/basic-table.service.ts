import { Injectable } from '@angular/core';


@Injectable()

export class BasicTableService {
    private tablas: Tabla[]=[
        {
            id: 1,
            nombre:"Deshmukh",
            apellido:"Prohaska",
            usuario:"@Genelia",
            Rol:"admin"
        },
        {
            id: 2,
            nombre:"Deshmukh",
            apellido:"Gaylord",
            usuario:"@Ritesh",
            Rol:"member"
        },
        {
            id: 3,
            nombre:"Sanghani",
            apellido:"Gusikowski",
            usuario:"@Govinda",
            Rol:"developer"
        },
        {
            id: 4,
            nombre:"Roshan",
            apellido:"Rogahn",
            usuario:"@Hritik",
            Rol:"supporter"
        },
        {
            id: 5,
            nombre:"Joshi",
            apellido:"Hickle",
            usuario:"@Maruti",
            Rol:"member"
        },
        {
            id: 6,
            nombre:"Nigam",
            apellido:"Eichmann",
            usuario:"@Sonu",
            Rol:"supporter"
        },
    ];
    constructor(){
        console.log("servicio basic-table listo para usarse...")
    }
    getTablas(): Tabla[] {
        return this.tablas;
    }
}
export interface Tabla{
    id: number;
    nombre: string;
    apellido: string;
    usuario: string;
    Rol: string;
};