import { Component, OnInit } from '@angular/core';
import {ArtistService} from "../../../services/artist.service";
import {Artists} from "../../../services/artist.interfaces";

@Component({
  selector: 'app-artist-overview',
  templateUrl: './artist-overview.component.html',
  styleUrls: ['./artist-overview.component.css']
})
export class ArtistOverviewComponent implements OnInit {

  constructor(private artistService: ArtistService) { }
  artists: Artists;

  ngOnInit(): void {
    this.initArtists();
  }

  private initArtists() {
    this.artists = this.artistService.getArtists();
  }
}
