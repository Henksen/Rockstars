import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.css']
})
export class ArtistSearchComponent implements OnInit {
  @ViewChild('searchInput') searchInput: ElementRef;
  @ViewChild('submitButton') submitButton: ElementRef;
  constructor() {}

  searchedInput: string;

  ngOnInit(): void {

  }

  searchArtist(): void {
    // @ts-ignore
    this.searchedInput = document.getElementById("searchInput").value;
    console.log(this.searchedInput);
  }


}
