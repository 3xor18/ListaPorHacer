import { Action } from '@ngrx/store';


export const AGREGAR_TODO = '[TODO] Agregar Todo';
export const TOGGLE_TODO = '[TODO] Toggle Todo';
export const TOGGLE_ALL_TODO = '[TODO] Toggle All Todo';
export const EDITAR_TODO = '[TODO] Editar Todo';
export const BORRAR_TODO = '[TODO] Borrar Todo';
export const BORRAR_ALL_TODO = '[TODO] Borrar ALL Todo';


export class agregarTodoActions implements Action {
    readonly type = AGREGAR_TODO;

    constructor(public texto: string) { }
}

export class ToggleTodoActions implements Action {
    readonly type = TOGGLE_TODO;

    constructor(public id: number) { }
}

export class ToggleAllTodoActions implements Action {
    readonly type = TOGGLE_ALL_TODO;

    constructor(public completado: boolean) { }
}

export class EditarTodoActions implements Action {
    readonly type = EDITAR_TODO;

    constructor(public id: number, public texto: string) { }
}

export class BorrarTodoActions implements Action {
    readonly type = BORRAR_TODO;

    constructor(public id: number) { }
}

export class BorrarALLTodoActions implements Action {
    readonly type = BORRAR_ALL_TODO;
}


export type Acciones = agregarTodoActions |
    ToggleTodoActions |
    EditarTodoActions |
    BorrarTodoActions |
    ToggleAllTodoActions |
    BorrarALLTodoActions;
