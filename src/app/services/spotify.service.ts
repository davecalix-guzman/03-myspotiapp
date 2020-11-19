import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
  }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAqTkNNU6Jygq1kDHoK_8lwRQzeoZJM1wxFR-Qnh4Dlbe-2Qh1VChgX1bwhMZk1hydLS1ON_yg0qjH95lhCQR9FI055-_8EO4dc0DcfzC8O1rScvTbafjaNnqHGW_uWzrK6J8hmxo_Aorxof38I32iZ7wT2JX0',
    });
    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases').pipe(
      map((data) => data['albums'].items)
    );
  }

  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=20`).pipe(
      map((data) => data['artists'].items)
    );
  }

  getArtistaById(artistaId: string){
    return this.getQuery(`artists/${artistaId}`);
  }
}
