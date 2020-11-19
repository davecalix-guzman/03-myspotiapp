import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [],
})
export class ArtistaComponent {
  artista: any = {};

  constructor(private spotify: SpotifyService, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      console.log(params.id);
      this.spotify.getArtistaById(params.id).subscribe((response: any) => {
        this.artista = response;
        console.log(response);
      });
    });
  }
}
