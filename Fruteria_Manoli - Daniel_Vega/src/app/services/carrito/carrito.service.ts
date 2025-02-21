import { Injectable } from '@angular/core';
import { Producto } from '../../interfaces/carrito.interface';
import { Fruta } from '../../interfaces/fruta.interface';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private producto: Producto[] = []

  getCarrito(): Producto[] {
    return this.producto
  }

  agregarAlCarrito(fruta: Fruta) {
    const item = this.producto.find((producto) => producto.fruta.id === fruta.id)

    if (item) {
      item.cantidad += 1
    } else {
      this.producto.push({
        fruta, cantidad: 1
      })
    }
  }

  eliminarDelCarrito(id: number) {
    this.producto = this.producto.filter(item => item.fruta.id !== id)
  }

  vaciarCarrito() {
    this.producto = []
  }

  producto = signal<Producto[]>([])

  getCarrito(): Producto[] {
    return this.producto()
  }

  agregarAlCarrito(fruta: Fruta) {
    const productosActuales = this.producto()
    const item
  }

}
