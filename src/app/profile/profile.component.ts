import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../servicios/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  listaJUGADOR: any[]=[];
  listaJUGADOR2: any[]=[];
  constructor(private _profileService: ProfileService ) {
    this._profileService.getJUGADOR().subscribe((data:any) =>{
      this.listaJUGADOR = data;
      console.log(data);
      }
    )
    this._profileService.getJUGADOR2().subscribe((data:any) =>{
      this.listaJUGADOR2 = data;
      console.log(data);
      }
    )
  }

  ngOnInit(): void {
  }

}
