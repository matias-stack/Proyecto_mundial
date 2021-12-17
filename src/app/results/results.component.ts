import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  showMe:boolean = false;
  showMe2:boolean = false;
  showMe3:boolean = false;
  showMe4:boolean = false;
  showMe5:boolean = false;
  showMe6:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  toogleTag():void{
    this.showMe=!this.showMe;
  }
  toogleTag2():void{
    this.showMe2=!this.showMe2;
  }
  toogleTag3():void{
    this.showMe3=!this.showMe3;
  }
  toogleTag4():void{
    this.showMe4=!this.showMe4;
  }
  toogleTag5():void{
    this.showMe5=!this.showMe5;
  }
  toogleTag6():void{
    this.showMe6=!this.showMe6;
  }
}
