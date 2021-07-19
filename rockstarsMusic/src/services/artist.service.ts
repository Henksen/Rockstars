import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ARTISTS_URL} from './artist.constants';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private httpClient: HttpClient) { }

  getArtists(): Observable<any> {
    return this.httpClient.get(ARTISTS_URL);
  }
}
