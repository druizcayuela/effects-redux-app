import { Usuario } from '../../models/usuario.model';
import { CARGAR_USUARIO, CARGAR_USUARIO_SUCCESS, CARGAR_USUARIO_FAIL, usuarioAcciones } from '../actions';


export interface UsuarioState {
    user: Usuario;
    loaded: boolean;
    loading: boolean;
    error: any;
}

const initState: UsuarioState = {
    user: null,
    loaded: false,
    loading: false,
    error: null
};

export function usuarioReducer( state = initState, action: usuarioAcciones): UsuarioState {

    switch (action.type) {

        case CARGAR_USUARIO:
            return {
                ...state,
                loading: true,
                error: null
            };

        case CARGAR_USUARIO_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                user: {...action.usuario}
            };

        case CARGAR_USUARIO_FAIL:
            return{
                ...state,
                loaded: false,
                loading: false,
                error: {
                    status: action.payload.status,
                    message: action.payload.message,
                    url: action.payload.url
                }
            };

        default:
            return state;
    }

}
