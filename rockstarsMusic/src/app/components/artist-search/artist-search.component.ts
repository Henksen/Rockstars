import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.css']
})
export class ArtistSearchComponent implements OnInit {
  @ViewChild('searchInput') searchInput: ElementRef;
  @ViewChild('submitButton') submitButton: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  searchArtist(searchedValue: string): void {

  }


}
