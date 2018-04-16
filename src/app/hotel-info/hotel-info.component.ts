import { Component, OnInit, Input } from '@angular/core';

import { Hotel } from '../models/hotel';
import { Comentario } from '../models/comentario';
@Component({
  selector: 'app-hotel-info',
  templateUrl: './hotel-info.component.html',
  styleUrls: ['./hotel-info.component.css']
})
export class HotelInfoComponent implements OnInit {
  @Input() hotel: Hotel;
  @Input() coment : Comentario;

  //Hotel
  latitude:number;
  longitude:number;
  location;

//Comentario
  usuario:string;
	email:string;
	comentario:string;
	calificacion:number;
  constructor() { }

  ngOnInit() {
    this.latitude = this.hotel.latitud;
    this.longitude = this.hotel.longitud;
    this.location = this.hotel.nombre;
  }
  

}
