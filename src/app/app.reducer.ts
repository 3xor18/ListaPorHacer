import { Todo } from './todo/model/todo';
import { ActionReducerMap } from '@ngrx/store';
import * as fromTodo from './todo/todo.reducer'
import * as fromFilto from './filter/filter.reducer'
import * as fromFiltroAction from './filter/filter.actions'


export interface AppState {
    todos: Todo[];
    filtro: fromFiltroAction.filtrosValidos;
}

export const appReducers: ActionReducerMap<AppState> = {
    todos: fromTodo.todoReducer,
    filtro: fromFilto.filtroReducer
};