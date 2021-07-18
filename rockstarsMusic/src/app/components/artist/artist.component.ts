import {Component, Input} from '@angular/core';
import {Artist} from "../../../services/artist.interfaces";

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {
  @Input() artist: Artist | undefined;

  constructor() { }

}
