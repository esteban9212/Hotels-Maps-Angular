import { Component, OnInit, Input } from '@angular/core';
import { Comentario } from '../models/comentario';

@Component({
  selector: 'app-comentario-item',
  templateUrl: './comentario-item.component.html',
  styleUrls: ['./comentario-item.component.css']
})
export class ComentarioItemComponent implements OnInit {
@Input() comentario:Comentario;
usuario:string;
email:string;
comentarioDescripcion:string;
calificacion:number;

  constructor() { }

  ngOnInit() {

  	this.usuario=this.comentario.usuario;
  	this.email=this.comentario.email
  	this.comentarioDescripcion=this.comentario.comentario;
  	this.calificacion=this.comentario.calificacion;

  }

}
