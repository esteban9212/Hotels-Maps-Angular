import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Hotel } from '../models/hotel'
import { Observable } from 'rxjs/Observable';
import { HotelsService } from '../services/hotels.service';

@Component({
  selector: 'app-search-hotel',
  templateUrl: './search-hotel.component.html',
  styleUrls: ['./search-hotel.component.css']
})
export class SearchHotelComponent implements OnInit {

  hotels:Hotel[];
  hotel:Hotel;

  constructor(public hotelService: HotelsService) {

	this.hotel = {nombre:"",calificacionPromedio:"",costoHabitacion:"",ubicacion:"",comentarios:""};
  }

  ngOnInit() {

  	 this.hotelService.getHotels().subscribe((hotels)=>
    this.hotels=hotels
      );
  }

  addHotel(){
console.log(this.hotel);
    this.hotelService.addHotel(this.hotel);
  }

}
