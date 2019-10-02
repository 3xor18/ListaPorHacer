import * as fromFiltro from './filter.actions'

const estadiInicial: fromFiltro.filtrosValidos = 'todos';

export function filtroReducer(state = estadiInicial,
    action: fromFiltro.acciones)
    : fromFiltro.filtrosValidos {

    switch (action.type) {
        case fromFiltro.SET_FILTRO:
            return action.filtro;

        default:
            return state;
    }
}