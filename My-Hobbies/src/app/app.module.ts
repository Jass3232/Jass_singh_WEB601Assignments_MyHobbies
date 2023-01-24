import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HobbiesComponent } from './MyComponents/hobbies/hobbies.component';

@NgModule({
  declarations: [
    AppComponent,
    HobbiesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
