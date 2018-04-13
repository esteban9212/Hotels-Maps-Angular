import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Hotel } from '../models/hotel'

@Injectable()
export class HotelsService {



	hotelsCollection :AngularFirestoreCollection<Hotel>;
	hotelsDocument: AngularFirestoreDocument<Hotel>;
	hotels: Observable<Hotel[]>;


	constructor(public db: AngularFirestore) {


		this.hotelsCollection = db.collection('hotels');

		this.hotels = this.hotelsCollection.snapshotChanges()
		.map(hotels => {
             //   this.countItems = actions.length;
             return hotels.map(hotel => ({ id: hotel.payload.doc.id,
             	nombre: hotel.payload.doc.get("nombre"), 
             	calificacionPromedio: hotel.payload.doc.get("calificacionPromedio"),
             	costoHabitacion: hotel.payload.doc.get("costoHabitacion"),
             	latitud: hotel.payload.doc.get("latitud"),
             	longitud: hotel.payload.doc.get("longitud"),
             	comentarios: hotel.payload.doc.get("comentarios")  }));
         });


	}

	getHotels(){
		return this.hotels;
	}

	addHotel(nombre: string, costoHabitacion: number, latitud: number, longitud: number){

		let hotel: Hotel = {
			id: '',
			nombre: nombre,
			costoHabitacion: costoHabitacion,
			calificacionPromedio: 0,
			latitud: latitud,
			longitud: longitud,
			comentarios:null
		};
		this.hotelsCollection.add(hotel);
	}

	delHotel(hotel:Hotel){

		let url = "hotels/"+hotel.id; 
		this.hotelsDocument = this.db.doc(url);
		this.hotelsDocument.delete();


		console.log(hotel);
		console.log("animo");

	}



}
