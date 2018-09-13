import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { CARGAR_USUARIOS, CargarUsuariosSuccess, CargarUsuariosFail } from '../actions/usuarios.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';

@Injectable()
export class UsuariosEffects {

    constructor(private action$: Actions,
                public usuarioService: UsuarioService) {}

    @Effect()
    cargarUsuarios$ = this.action$.ofType(CARGAR_USUARIOS)
            .pipe(
                switchMap( () => {
                    return this.usuarioService.getUsers()
                        .pipe(
                            map(users => new CargarUsuariosSuccess(users)),
                            catchError( error => of (new CargarUsuariosFail(error)) )
                        );
                })
            );
}
