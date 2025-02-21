import { Component } from '@angular/core';
import { Fruta } from '../../interfaces/fruta.interface';
import { ActivatedRoute } from '@angular/router';
import { FrutasService } from '../../services/frutas/frutas.service';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent {

  fruta !: Fruta

  constructor(
    private route: ActivatedRoute,
    private frutasService: FrutasService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'))
    const fruta = this.frutasService.getFrutaByID(id)

    if (fruta) {
      this.fruta = fruta
    } else {
      console.log('No se ha encontrado la fruta');
    }

  }

  toggleFavorito() {
    this.frutasService.toggleFavorita(this.fruta.id)
  }

}
