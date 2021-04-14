import {
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    TAREAS_PROYECTO
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case AGREGAR_TAREA:
            return {
                ...state,
                tareasproyecto: [action.payload, ...state.tareasproyecto],
                errortarea: false
            }
        case VALIDAR_TAREA:
            return {
                ...state,
                errortarea: true
            }
        case TAREAS_PROYECTO:
            return {
                ...state,
                tareasproyecto: action.payload
            }
        default:
            return state;
    }
}