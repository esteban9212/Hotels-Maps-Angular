import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';
import { HotelsService } from './services/hotels.service';
import { HotelItemListComponent } from './hotel-item-list/hotel-item-list.component';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    SearchHotelComponent,
    HotelItemListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
     HttpModule,
  ],
  providers: [HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
