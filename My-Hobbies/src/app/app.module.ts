import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentFilterPipe } from './pipes/content-filter-pipe';
import { HoverAffectDirective } from './hover-affect.directive';
import { AppMessagesComponent } from './app-messages/app-messages.component';
import { ModifyContentComponent } from './modify-content/modify-content.component';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MyDataService } from './service/DataService';
@NgModule({
  declarations: [
    AppComponent,
    ContentFilterPipe,
    ContentCardComponent,
    ContentListComponent,
    HoverAffectDirective,
    AppMessagesComponent,
    ModifyContentComponent,
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(MyDataService),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
