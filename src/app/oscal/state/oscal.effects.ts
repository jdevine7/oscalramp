import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, of } from 'rxjs';
import { State } from 'src/app/state/app.state';
import { CatalogService } from '../services/catalog.service';
import { OscalApiActions, OscalPageActions } from './actions';

@Injectable()
export class OscalEffects {
  constructor(
    private actions: Actions,
    // private store: Store<State>,
    private catalogService: CatalogService
  ) {}

  loadCatalog = createEffect(() => {
    return this.actions.pipe(
      ofType(OscalPageActions.catalogPageOpened),
      mergeMap(() =>
        this.catalogService.getCatalog().pipe(
          map((rootCatalog) =>
            OscalApiActions.fetchCatalogSuccess({
              currentCatalog: rootCatalog.catalog,
            })
          ),
          catchError((error) =>
            of(OscalApiActions.fetchCatalogFailure({ error }))
          )
        )
      )
    );
  });
}
