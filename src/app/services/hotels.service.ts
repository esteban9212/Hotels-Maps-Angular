		import { Injectable } from '@angular/core';
		import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
		import { Observable } from 'rxjs/Observable';
		import { Hotel } from '../models/hotel';
		import { Comentario } from '../models/comentario';

		@Injectable()
		export class HotelsService {



			hotelsCollection :AngularFirestoreCollection<Hotel>;
			hotelsDocument: AngularFirestoreDocument<Hotel>;
			hotels: Observable<Hotel[]>;
			hotelsToFilter: Hotel[];


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

				this.getHotels().subscribe((hotels)=>
					this.hotelsToFilter=hotels

					);
			}




			loadFireBase() {
				this.hotelsCollection = this.db.collection('hotels');
				this.hotels = this.hotelsCollection.snapshotChanges().map(changes => {
					return changes.map(a => {
						const data = a.payload.doc.data() as Hotel;
						data.id = a.payload.doc.id;
						return data;
					});
				});
			}


			getHotels(){
				this.loadFireBase();
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
					comentarios:new Array<Comentario>(),
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

			updateHotel(hotel: Hotel) {
				this.hotelsDocument = this.db.doc('hotels/' + hotel.id);
				this.hotelsDocument.update(hotel);
			}

			filterHotels(valor: string) {
		//   this.loadFireBase();
		let mensaje: string = '';
		let hotelesFiltrados: Hotel[] = [];



		this.hotelsToFilter.forEach(hotel => {
			let miNombre = hotel.nombre.toLowerCase();
			if (miNombre.includes(valor.toLowerCase())) {
				hotelesFiltrados.push(hotel);
			}
		});
		if (hotelesFiltrados.length == 0) {
			mensaje = 'No se encontraron resultados, pruebe nuevamente.';
			console.log(mensaje);

		}

		return { hoteles: hotelesFiltrados, mensaje: mensaje};
	}





}
