import { Comentario } from './comentario';
export class Hotel {

	id: string;	
	nombre:string;
	calificacionPromedio:number;
	costoHabitacion:number;
	latitud:number;
	longitud:number;
	comentarios:Comentario[];


	constructor(nombre:string, calificacionPromedio:number,costoHabitacion:number,latitud:number,longitud:number,comentarios:Comentario[]) {
		this.nombre=nombre;
		this.calificacionPromedio=calificacionPromedio;
		this.costoHabitacion=costoHabitacion;
		this.latitud=latitud;
		this.longitud=longitud;
		this.comentarios=comentarios;
	}
}