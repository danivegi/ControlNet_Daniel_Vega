import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ListadoTareasComponent } from './listado-tareas/listado-tareas.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'listado-tareas', component: ListadoTareasComponent }
];
