import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArtistComponent } from './components/artist/artist.component';
import { ArtistOverviewComponent } from './components/artist-overview/artist-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    ArtistComponent,
    ArtistOverviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
