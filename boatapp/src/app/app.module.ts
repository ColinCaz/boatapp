import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '@auth0/auth0-angular';


import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoatsComponent } from './boats/boats.component';
import { ReadBoatComponent } from './read-boat/read-boat.component';
import { UpdateBoatComponent } from './update-boat/update-boat.component';
import { CreateBoatComponent } from './create-boat/create-boat.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    BoatsComponent,
    ReadBoatComponent,
    UpdateBoatComponent,
    CreateBoatComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule.forRoot({
      domain: 'colincazaubon.eu.auth0.com',
      clientId: 'eghtyMT3WCzdWFOgxcyfAvwN1I0TUKgU'
    }),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }