import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
 
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
 
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TripsPageModule } from './members/inc/trips/trips.module';
import { PrintPageModule } from './members/inc/print/print.module';
import { TripsMorePageModule } from './members/inc/trips-more/trips-more.module';
import { Base64 } from '@ionic-native/base64/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { NgPipesModule} from 'ngx-pipes';
import { DatePipe, CurrencyPipe } from '@angular/common'

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot({hardwareBackButton: false}), 
    AppRoutingModule,
    IonicStorageModule.forRoot(),
    ReactiveFormsModule, 
    FormsModule,
    HttpClientModule,
    TripsPageModule,
    PrintPageModule,
    TripsMorePageModule,
    NgPipesModule,
  ],
  providers: [
    CurrencyPipe,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Base64,
    Keyboard,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
