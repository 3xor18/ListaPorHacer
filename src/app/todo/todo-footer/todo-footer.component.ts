import { Component, OnInit } from '@angular/core';
import * as fromFilter from '../../filter/filter.actions'
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../model/todo';
import * as fromTodo from '../todo.actions'

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  penditentes: number;
  filtrosValidos: fromFilter.filtrosValidos[] = ['todos', 'completados', 'pendientes'];
  filtroActual: fromFilter.filtrosValidos;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      this.contarPendientes(state.todos);
      this.filtroActual = state.filtro
    })
  }

  cambiarFiltro(nuevoFiltro: fromFilter.filtrosValidos) {
    this.store.dispatch(new fromFilter.SetFiltroAction(nuevoFiltro))
  }

  contarPendientes(todos: Todo[]) {
    this.penditentes = todos.filter(todo => !todo.completado).length;
  }

  limpiar() {
    this.store.dispatch(new fromTodo.BorrarALLTodoActions)
  }
}
