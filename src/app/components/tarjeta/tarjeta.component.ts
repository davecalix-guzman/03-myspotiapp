import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
})
export class TarjetaComponent {
  @Input() items: any[] = [];
  constructor() {}
}
