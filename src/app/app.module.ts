import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { SearchHotelComponent } from './search-hotel/search-hotel.component';
import { HotelsService } from './services/hotels.service';



@NgModule({
  declarations: [
    AppComponent,
    SearchHotelComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
  ],
  providers: [HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
