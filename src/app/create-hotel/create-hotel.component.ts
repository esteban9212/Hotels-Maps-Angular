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
  latitude = 3.341968;
  longitude = -76.53034;
  ubicacionElegida = false;

  constructor(public hotelService: HotelsService) { }

  ngOnInit() {
    this.hotelService.getHotels().subscribe((hotels) =>
      this.hotels = hotels
    );
  }

onInputChange(hotelBuscado:string){
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
  saveHotel() {

    this.hotelService.addHotel(this.nombre, this.costoHabitacion, this.latitude, this.longitude);
    this.nombre = '';
    let pr: number;
    this.costoHabitacion = pr;
    this.latitude = this.latitude;
    this.longitude = this.longitude;
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
  onChoseLocation(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.ubicacionElegida = true;
    console.log(event.coords.lat);
    console.log(event.coords.lng);

  }

}
