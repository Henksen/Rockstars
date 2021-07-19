import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArtistComponent } from './components/artist/artist.component';
import { ArtistOverviewComponent } from './components/artist-overview/artist-overview.component';
import {HttpClientModule} from "@angular/common/http";
import { ArtistSearchComponent } from './components/artist-search/artist-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    ArtistOverviewComponent,
    ArtistSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
