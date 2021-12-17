import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class DashboardService {
    private ventas: Venta[]=[
        {
            id: 1,
            nombre: "Elite admin",
            estado: "SALE",
            fecha:"April 18,2021",
            precio: 18
        },
        {
            id: 2,
            nombre: "Real Homes WP Theme",
            estado: "EXTEND",
            fecha:"April 19,2021",
            precio: 1250
        },
        {
            id: 3,
            nombre: "Ample Admin",
            estado: "EXTEND",
            fecha:"April 19,2021",
            precio: 1250
        },
        {
            id: 4,
            nombre: "Medical Pro WP Theme",
            estado: "TAX",
            fecha:"April 20,2021",
            precio: -24
        },
        {
            id: 5,
            nombre: "Hosting press html",
            estado: "SALE",
            fecha:"April 21,2021",
            precio: 24
        },
        {
            id: 6,
            nombre: "Digital Agency PSD",
            estado: "SALE",
            fecha:"April 23,2021",
            precio: -14
        },
        {
            id: 7,
            nombre: "Helping Hands WP Theme",
            estado: "MEMBER",
            fecha:"April 22,2021",
            precio: 64
        }
    ];

    private comentarios: Comentario[]=[
        {
            Img: "../../assets/plugins/images/users/varun.jpg",
            nombre: "James Anderson",
            texto: "Lorem Ipsum is simply dummy text of the printing and type setting industry.It has survived not only five centuries. ",
            estado: "Pending",
            fecha: "April 14, 2021"

        },
        {
            Img: "../../assets/plugins/images/users/genu.jpg",
            nombre: "Michael Jorden",
            texto: "Lorem Ipsum is simply dummy text of the printing and type setting industry.It has survived not only five centuries. ",
            estado: "Approved",
            fecha: "April 14, 2021"

        },
        {
            Img: "../../assets/plugins/images/users/ritesh.jpg",
            nombre: "Johnathan Doeting",
            texto: "Lorem Ipsum is simply dummy text of the printing and type setting industry.It has survived not only five centuries. ",
            estado: "Rejected",
            fecha: "April 14, 2021"

        }
    ];
    private chats: Chat[]=[
        {
            Img:"../../assets/plugins/images/users/varun.jpg",
            nombre:"Varun Dhavan",
            estado:"online"
        },
        {
            Img:"../../assets/plugins/images/users/genu.jpg",
            nombre:"Genelia Deshmukh",
            estado:"Away"
        },
        {
            Img:"../../assets/plugins/images/users/ritesh.jpg",
            nombre:"Ritesh Deshmukh",
            estado:"Busy"
        },
        {
            Img:"../../assets/plugins/images/users/arijit.jpg",
            nombre:"Arijit Sinh",
            estado:"Offline"
        },
        {
            Img:"../../assets/plugins/images/users/govinda.jpg",
            nombre:"Govinda Star",
            estado:"online"
        },
        {
            Img:"../../assets/plugins/images/users/hritik.jpg",
            nombre:"John Abraham",
            estado:"online"
        },
    ];
    constructor(private http: HttpClient){
        console.log("servicio dashboard listo para usarse...")
    }

    getVentas() :Venta[]{
        return this.ventas;
    }
    getJUGADOR(){
        return this.http.get('http://localhost:8090/jugador');
    }
    getJUGADOR2(){
        return this.http.get('http://localhost:8090/jugador2');
    }
    getComentarios(): Comentario[] {
        return this.comentarios;
    }
    getChats(): Chat[] {
        return this.chats;
    }

}

export interface Venta{
    id: number;
    nombre: string;
    estado: string;
    fecha: string;
    precio: number;
};
export interface Comentario{
    Img: string;
    nombre: string;
    texto: string;
    estado: string;
    fecha: string;
};
export interface Chat{
    Img: string;
    nombre: string;
    estado: string;
};
