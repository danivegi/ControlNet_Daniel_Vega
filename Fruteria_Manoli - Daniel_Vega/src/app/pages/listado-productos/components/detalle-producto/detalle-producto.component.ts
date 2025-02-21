import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Fruta } from '../../../../interfaces/fruta.interface';
import { RouterModule } from '@angular/router';
import { CarritoService } from '../../../../services/carrito/carrito.service';

@Component({
  selector: 'component-detalle-producto',
  imports: [RouterModule],
  templateUrl: './detalle-producto.component.html',
  styleUrl: './detalle-producto.component.css'
})
export class DetalleProductoComponent {

  @Input() fruta!: Fruta
  @Output() frutaFavoritaEmitida = new EventEmitter<number>()

  constructor(
    private carritoService:CarritoService
  ){}

  toggleFavorito(id: number) {
    this.frutaFavoritaEmitida.emit(id)
  }

  agregarAlCarrito() {
    this.carritoService.agregarAlCarrito(this.fruta)
  }

}
