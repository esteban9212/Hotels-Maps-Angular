import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { environment } from '../environments/environment.prod';
import { AppComponent } from './app.component';
import { HotelsService } from './services/hotels.service';
import { HotelItemListComponent } from './hotel-item-list/hotel-item-list.component';
import { HttpModule } from '@angular/http';
import { HotelInfoComponent } from './hotel-info/hotel-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateHotelComponent } from './create-hotel/create-hotel.component';
import { AgmCoreModule } from '@agm/core';
import { TabModule } from 'angular-tabs-component';
import { ComentarioItemComponent } from './comentario-item/comentario-item.component';



@NgModule({
  declarations: [
    AppComponent,
    HotelItemListComponent,
    HotelInfoComponent,
    CreateHotelComponent,
    ComentarioItemComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase,'Hotels-Maps-Angular'),
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAaAE2ZFl8qgUC9xc4fU4OnP_d3il3_zmo'
    }),
    TabModule
  ],
  providers: [HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
