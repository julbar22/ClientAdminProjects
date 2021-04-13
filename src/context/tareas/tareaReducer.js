import { 
    AGREGAR_TAREA,
    VALIDAR_TAREA
} from '../../types';

export default (state, action) => {
    switch(action.type) {
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
        default:
            return state;
    }
}