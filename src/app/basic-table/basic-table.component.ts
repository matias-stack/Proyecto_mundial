import { Component, OnInit } from '@angular/core';
import { BasicTableService, Tabla } from '../servicios/basic-table.service';

@Component({
  selector: 'app-basic-table',
  templateUrl: './basic-table.component.html',
  styleUrls: ['./basic-table.component.css']
})

export class BasicTableComponent implements OnInit {
 tablas:Tabla[]=[];
  constructor(private _basictableService: BasicTableService) {
    //console.log(_basictableService.getTablas());
    this.tablas=_basictableService.getTablas();
    console.log(this.tablas[0].nombre);
   }

  ngOnInit(): void {
  }

}
