import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { UsuarioService } from '../../services/usuario.service';
import { of } from 'rxjs';
import { CARGAR_USUARIO, CargarUsuarioSuccess, CargarUsuarioFail } from '../actions';

@Injectable()
export class UsuarioEffects {

    constructor(private action$: Actions,
                public usuarioService: UsuarioService) {}

    @Effect()
    cargarUsuario$ = this.action$.ofType(CARGAR_USUARIO)
            .pipe(
                switchMap( action => {
                    return this.usuarioService.getUserById(action['id'])
                        .pipe(
                            map(user => new CargarUsuarioSuccess(user)),
                            catchError( error => of (new CargarUsuarioFail(error)) )
                        );
                })
            );
}
