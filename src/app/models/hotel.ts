export class Hotel {


	nombre:string;
	calificacionPromedio:string;
	costoHabitacion:string;
	ubicacion:string;
	comentarios:string;


	constructor(nombre:string, calificacionPromedio:string,costoHabitacion:string,ubicacion:string,comentarios:string) {
		this.nombre=nombre;
		this.calificacionPromedio=calificacionPromedio;
		this.costoHabitacion=costoHabitacion;
		this.ubicacion=ubicacion;
		this.comentarios=comentarios;
	}



}