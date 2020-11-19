import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
})
export class TarjetaComponent {

  @Input() items: any[] = [];

  constructor(private router: Router) {}

  verArtista(item: any) {
    let artistaId: any;
    if (item.type === 'artist') {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }
    this.router.navigate(['artist/', artistaId]);
  }
}
