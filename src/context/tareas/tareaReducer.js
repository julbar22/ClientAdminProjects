import {
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    TAREAS_PROYECTO,
    ACTUALIZAR_TAREA,
    TAREA_ACTUAL,
    LIMPIAR_TAREA,
    ELIMINAR_TAREA,
    LIMPIAR_TAREAS
} from '../../types';

const TareaReducer = (state, action) => {
    switch (action.type) {
        case AGREGAR_TAREA:
            return {
                ...state,
                tareasproyecto: [...state.tareasproyecto, action.payload],
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
        case ACTUALIZAR_TAREA:
            return {
                ...state,
                tareasproyecto: state.tareasproyecto.map(tarea => tarea._id === action.payload._id ? action.payload : tarea)
            }
        case TAREA_ACTUAL:
            return {
                ...state,
                tareaseleccionada: action.payload
            }
        case LIMPIAR_TAREA:
            return {
                ...state,
                tareaseleccionada: null
            }
        case ELIMINAR_TAREA:
            return {
                ...state,
                tareasproyecto: state.tareasproyecto.filter(tarea => tarea._id !== action.payload)
            }
        case LIMPIAR_TAREAS:
            return {
                ...state,
                tareasproyecto: [],
                errortarea: false,
                tareaseleccionada: null
            }
        default:
            return state;
    }
}

export default TareaReducer;