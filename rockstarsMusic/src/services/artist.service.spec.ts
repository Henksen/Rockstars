// import {ArtistService} from './artist.service';
// import {ARTISTS_URL} from "./artist.constants";
// import {of} from "rxjs";
//
// describe('ArtistService', () => {
//   let mockHttpClient: { get: jest.Mock<any, any> };
//   let sut: ArtistService;
//   const artists =  {
//     artist: {
//       id: 5,
//       artist: "U2"
//     }
//   };
//
//
//
//   beforeEach(() => {
//     mockHttpClient = {
//       get: jest.fn().mockReturnValue(of(artists)),
//     };
//     sut = new ArtistService(mockHttpClient);
//   });
//
//   describe('getArtists', () => {
//     it('should call httpService', () => {
//       sut.getArtists();
//
//       expect(mockHttpClient.get).toHaveBeenCalledWith(ARTISTS_URL);
//     });
//   });
// });
