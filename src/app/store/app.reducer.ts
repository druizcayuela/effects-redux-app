import { UsuariosState, UsuarioState } from './reducers';
import { ActionReducerMap } from '@ngrx/store';
import { usuariosReducer } from './reducers/usuarios.reducer';
import { usuarioReducer } from './reducers/usuario.reducer';

export interface AppState {
    usuarios: UsuariosState;
    usuario: UsuarioState;
}

export const appReducers: ActionReducerMap<AppState> = {
    usuarios: usuariosReducer,
    usuario: usuarioReducer
};
