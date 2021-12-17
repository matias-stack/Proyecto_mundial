import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //JUGADOR[];
  constructor(private http: HttpClient) { 
    console.log("Servicio profile listo para usarse...")
  }
  getJUGADOR(){
    return this.http.get('http://localhost:8090/jugador')
  }
  getJUGADOR2(){
    return this.http.get('http://localhost:8090/jugador2')
  }
}
