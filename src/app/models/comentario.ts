export class Comentario {

	id: string;	
	usuario:string;
	email:string;
	comentario:string;
	calificacion:number;

	constructor(usuario:string, email:string,comentario:string,calificacion:number) {
		this.usuario=usuario;
		this.email=email;
		this.comentario=comentario;
		this.calificacion=calificacion;

	}



}