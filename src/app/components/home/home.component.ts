import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [],
})
export class HomeComponent implements OnInit {
  paises: any[] = [];
  constructor(private http: HttpClient, private spotify: SpotifyService) {
    this.http
      .get('https://restcountries.eu/rest/v2/all')
      .subscribe((paises: any) => {
        this.paises = paises;
        this.spotify.getNewReleases();
      });
  }

  ngOnInit(): void {}
}
