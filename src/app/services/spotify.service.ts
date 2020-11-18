import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
  }

  getNewReleases() {
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQBy4YtUfnPAiIh58s9zveePU-LVTf6Vyjdb8hG_17XskYRQiRjzGsxYOzDXFZGClxDr0mALDYfeZ31WZC4',
    });
    this.http
      .get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .subscribe((releases) => {
        console.log(releases);
      });
  }
}
