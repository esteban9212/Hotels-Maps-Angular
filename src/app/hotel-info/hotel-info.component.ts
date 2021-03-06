import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../models/hotel';
import { Comentario } from '../models/comentario';
import { HotelsService } from '../services/hotels.service';
@Component({
  selector: 'app-hotel-info',
  templateUrl: './hotel-info.component.html',
  styleUrls: ['./hotel-info.component.css']
})
export class HotelInfoComponent implements OnInit {
  @Input() hotel: Hotel;
  @Input() coment: Comentario;

  //Hotel
  latitude: number;
  longitude: number;
  location;

  //Comentario
  usuario: string;
  email: string;
  comentario: string;
  calificacion: number;
  comentarios: Comentario[];


  constructor(public hotelService: HotelsService) { }

  ngOnInit() {
    this.latitude = this.hotel.latitud;
    this.longitude = this.hotel.longitud;
    this.location = this.hotel.nombre;
    this.comentarios = this.hotel.comentarios;
  }

  saveComent() {

    if (this.comentario.length) {
      let comentario: Comentario = {
        id: this.hotel.id + this.usuario + this.email,
        usuario: this.usuario,
        email: this.email,
        comentario: this.comentario,
        calificacion: this.calificacion
      }

      this.hotel.comentarios.push(comentario);
      this.hotelService.updateHotel(this.hotel);

      let total: number = 0;
      let size = this.hotel.comentarios.length;
      for (let i: number = 0; i < size; i++) {

        let cal = this.hotel.comentarios[i].calificacion+"";
        let num:number= parseInt(cal);

        console.log(cal);
        console.log(total);
        total += num;
      }
      let totalnum=parseInt(total+"");
      let sizenum=parseInt(size+"");
      let promedio=totalnum / sizenum;
let redondeado= promedio.toFixed(2);


      this.hotel.calificacionPromedio =parseInt(redondeado+"") ;

      this.hotelService.updateHotel(this.hotel);

      this.usuario = '';
      this.email = '';
      this.comentario = '';
      this.calificacion = -1;

    }



  }


}
