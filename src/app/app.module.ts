import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from 'app/dashboard/dashboard.component';
import { OyuncuListComponent } from './oyuncular/oyuncu-list/oyuncu-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OyuncuListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  exports:[
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
