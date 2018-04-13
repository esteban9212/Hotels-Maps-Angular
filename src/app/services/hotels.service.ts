import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Hotel } from '../models/hotel'

@Injectable()
export class HotelsService {



  	hotelsCollection :AngularFirestoreCollection<Hotel>;
	hotelsDocument: AngularFirestoreDocument<Hotel>;
	hotels: Observable<Hotel[]>;


	constructor(db: AngularFirestore) {


	this.hotelsCollection = db.collection('hotels');

          this.hotels = this.hotelsCollection.snapshotChanges()
            .map(hotels => {
             //   this.countItems = actions.length;
                return hotels.map(hotel => ({ id: hotel.payload.doc.id,
                							nombre: hotel.payload.doc.get("nombre"), 
                							calificacionPromedio: hotel.payload.doc.get("calificacionPromedio"),
                							costoHabitacion: hotel.payload.doc.get("costoHabitacion"),
                							ubicacion: hotel.payload.doc.get("ubicacion"),
                							comentarios: hotel.payload.doc.get("comentarios")  }));
            });


	}

	getHotels(){
		return this.hotels;
	}

	addHotel(hotel:Hotel){
		this.hotelsCollection.add(hotel);
	}



}
