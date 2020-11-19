import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {

  artistasEncontrados: any[] = [];
  constructor(private spotify: SpotifyService) {}

  buscar(termino: string) {
    if (termino !== '') {
      this.spotify.getArtistas(termino).subscribe((data: any) => {
        console.log(data);
        this.artistasEncontrados = data;
      });
    }
  }
}
