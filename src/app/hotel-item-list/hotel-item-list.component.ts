import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../models/hotel';
import { HotelsService } from '../services/hotels.service';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-hotel-item-list',
  templateUrl: './hotel-item-list.component.html',
  styleUrls: ['./hotel-item-list.component.css']
})
export class HotelItemListComponent implements OnInit {
	@Input() hotel:Hotel;
	 closeResult: string;

  constructor(public hotelService: HotelsService,public ngbmodule:NgbModal) {

   }

  ngOnInit() {
  }

  delTask(){   

	this.hotelService.delHotel(this.hotel);
   
  }

  Ira(content){
  	console.log(this.hotel.nombre);

  	    this.ngbmodule.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
