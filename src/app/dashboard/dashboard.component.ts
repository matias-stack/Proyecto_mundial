import { Component, OnInit } from '@angular/core';
import {  Comentario, DashboardService, Venta, Chat } from '../servicios/dashboard.service'; 

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  ventas:Venta[]=[];
  comentarios:Comentario[]=[];
  chats:Chat[]=[];
  listaJUGADOR: any[]=[]; 
  listaJUGADOR2: any[]=[]; 
  constructor(private _dashboardService: DashboardService) {
    console.log("creando el componente dashboard..")
    //console.log(_dashboardService.getVentas());
    //this.ventas=_dashboardService.getVentas();
    //console.log(this.ventas[0].nombre)
    this.comentarios=_dashboardService.getComentarios();
    console.log(this.comentarios[0].nombre)
    this.chats=_dashboardService.getChats();
    console.log(this.chats[0].nombre)
    _dashboardService.getJUGADOR().subscribe( (data:any )=>{
      this.listaJUGADOR = data;
      console.log(data);
    }
    )
    _dashboardService.getJUGADOR2().subscribe( (data:any )=>{
      this.listaJUGADOR2 = data;
      console.log(data);
    }
    )
   }

  ngOnInit(): void {
  }

}
