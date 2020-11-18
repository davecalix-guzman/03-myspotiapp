import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root',
})
export class SpotifyService {
  token: string;
  body = {
    grant_type: 'client_credentials',
    client_id: '9f7996d6373e4700abaff38928b8abe9',
    client_secret: 'e0e8ac0c946f48579d0b895a020110de',
  };
  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
  }

  getNewReleases(): void {
    const headers = new HttpHeaders({
      Authorization: this.getNewToken(),
    });
    this.http
      .get('https://api.spotify.com/v1/browse/new-releases', { headers })
      .subscribe((releases) => {
        console.log(releases);
      });
  }

  getNewToken(): string {
    this.http
    .post('https://accounts.spotify.com/api/token', this.body)
    .subscribe(response => {
      console.log(response);
    });
    return this.token;
  }
}
