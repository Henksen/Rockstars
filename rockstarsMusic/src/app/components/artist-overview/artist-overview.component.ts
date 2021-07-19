import { Component, OnInit } from '@angular/core';
import {ArtistService} from "../../../services/artist.service";
import {Artist, Artists} from "../../../services/artist.interfaces";

@Component({
  selector: 'app-artist-overview',
  templateUrl: './artist-overview.component.html',
  styleUrls: ['./artist-overview.component.css']
})
export class ArtistOverviewComponent implements OnInit {

  constructor(private artistService: ArtistService) { }
  artists: Artist[];

  ngOnInit(): void {
    this.initArtists();
  }

  private initArtists() {
    this.artistService
      .getArtists()
      .subscribe(artists => {
          this.artists = artists;
      });
  }

  onSearchArtist(searchedArtist: string) {
    console.log('Searching for the following artist ' + searchedArtist + '. You have great taste!');
  }
}
