import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../models/hotel'

@Component({
  selector: 'app-hotel-item-list',
  templateUrl: './hotel-item-list.component.html',
  styleUrls: ['./hotel-item-list.component.css']
})
export class HotelItemListComponent implements OnInit {
	  @Input() nombre:string;
	  @Input() calificacion:string;
	  @Input() precio:string;


  constructor() { }

  ngOnInit() {
  }

  delTask(e, hotel:Hotel){   


/*
    let index = this.tasks.findIndex( 
    	(taskM) => {return(taskM.name === task.name)} );
    this.tasks.splice(index,1);
*/
  	console.log(hotel);
//    this.taskService.deleteTask(task);

   
  }
}
