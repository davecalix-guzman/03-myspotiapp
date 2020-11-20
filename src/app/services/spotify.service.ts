import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
  }

  getQuery(query: string): Observable<object> {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQDHAAIkozJRDn1Fx_dLvE4pvX8lmsKP5PUUCm1dvGTlTc9m8srZX4XVwiz0XQAnABFrX2OEnY3WaZdjr3o',
    });
    return this.http.get(url, { headers });
  }

  getNewReleases(): Observable<any> {
    return this.getQuery('browse/new-releases').pipe(
      map((data: any) => data.albums.items)
    );
  }

  getArtistas(termino: string): Observable<any> {
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`).pipe(
      map((data: any) => data.artists.items)
    );
  }

  getArtistaById(artistaId: string): Observable<object>{
    return this.getQuery(`artists/${artistaId}`);
  }
}
