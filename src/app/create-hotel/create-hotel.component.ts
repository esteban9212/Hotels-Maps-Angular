import { Component, OnInit } from '@angular/core';
import { Hotel } from '../models/hotel';
import { HotelsService } from '../services/hotels.service';

@Component({
  selector: 'app-create-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.css']
})
export class CreateHotelComponent implements OnInit {

  hotels: Hotel[];
  hotelBuscado: string = "";
  nombre: string = '';
  costoHabitacion: number;
  latitud: number = 0;
  longitud: number = 0;

  constructor(public hotelService: HotelsService) { }

  ngOnInit() {
    this.hotelService.getHotels().subscribe((hotels) =>
      this.hotels = hotels
    );
  }

  saveHotel() {

    this.hotelService.addHotel(this.nombre, this.costoHabitacion, this.latitud, this.longitud);
    this.nombre = '';
    let pr: number;
    this.costoHabitacion = pr;
    let lat: number;
    this.latitud = lat;
    let lon: number;
    this.longitud = lon;
    //  this.locationChosen = false;
    alert('El hotel se creo exiosamente');
  }

  filter() {
    console.log("<" + this.hotelBuscado + ">");
    let hotelsToFilter: Hotel[];

    if (this.hotelBuscado.length == 0) {
      console.log("vacio");

      this.hotelService.getHotels().subscribe((hotels) =>
        this.hotels = hotels
      );

    } else {

      let resultado = this.hotelService.filterHotels(this.hotelBuscado);

      if (resultado.hoteles.length == 0) {
        this.hotelService.getHotels().subscribe((hotels) =>
          this.hotels = hotels

        );
        alert('no hay hoteles con ese nombre');
      } else {
        this.hotels = resultado.hoteles;
      }


    }

  }

}
