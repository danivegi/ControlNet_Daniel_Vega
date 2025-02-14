import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Tarea {
  id: number;
  texto: string;
}

@Component({
  selector: 'app-listado-tareas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.css']
})
export class ListadoTareasComponent {
  tareas: Tarea[] = [];
  nuevaTarea: string = '';

  agregarTarea() {
    if (this.nuevaTarea.trim()) {
      const tarea: Tarea = {
        id: Date.now(),
        texto: this.nuevaTarea
      };
      this.tareas.push(tarea);
      this.nuevaTarea = '';
    }
  }

  eliminarTarea(id: number) {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id);
  }

  get cantidadTareas(): number {
    return this.tareas.length;
  }
}
