import {
    LOGIN_USUARIO,
    AUTENTICACION_USUARIO,
    ERROR_LOGIN
} from "../../types";

const AuthReducer = (state, action) => {
    switch (action.type) {
        case LOGIN_USUARIO:
            localStorage.setItem("token", action.payload.token);
            return {
                ...state,
                token: action.payload.token
            }
        case AUTENTICACION_USUARIO:
            return {
                ...state,
                usuario: action.payload,
                autenticado: true,
                mensaje: null
            }
        case ERROR_LOGIN:
            return {
                ...state,
                mensaje: action.payload
            }
        default:
            return state;
    }
}
export default AuthReducer;
