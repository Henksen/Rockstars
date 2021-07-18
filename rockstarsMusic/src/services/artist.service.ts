import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ARTISTS_URL} from './artist.constants';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor(private httpClient: { get: jest.Mock<any, any> }) { }

  getArtists(): Observable<any> {
    return this.httpClient.get(ARTISTS_URL);
  }
}
