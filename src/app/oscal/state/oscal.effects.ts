import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, filter, map, mergeMap, of, switchMap } from 'rxjs';
import { State } from 'src/app/state/app.state';
import { routeCatalogId } from '.';
import { CatalogService } from '../services/catalog.service';
import { OscalApiActions, OscalPageActions } from './actions';

@Injectable()
export class OscalEffects {
  constructor(
    private actions: Actions,
    private store: Store<State>,
    private catalogService: CatalogService
  ) {}

  loadCatalog = createEffect(() => {
    return this.actions.pipe(
      ofType(OscalPageActions.catalogPageOpened),
      concatLatestFrom(() =>
        this.store
          .select(routeCatalogId)
          .pipe(filter((catalogId): catalogId is string => catalogId != null))
      ),
      switchMap(([, catalogId]) =>
        this.catalogService.getCatalog(catalogId).pipe(
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
