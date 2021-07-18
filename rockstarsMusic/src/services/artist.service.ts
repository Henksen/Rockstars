import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ARTISTS_URL} from './artist.constants';
import {HttpClient} from "@angular/common/http";
import {Artists} from "./artist.interfaces";

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private httpClient: HttpClient) { }

  getArtists(): Observable<Artists> {
    // @ts-ignore
    return this.httpClient.get(ARTISTS_URL);
  }
}
