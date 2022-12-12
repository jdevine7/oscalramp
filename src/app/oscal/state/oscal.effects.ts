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

  //two in actions in of type becaue i cant figure out router params + pages refresh/direct route to
  loadCatalog = createEffect(() => {
    return this.actions.pipe(
      ofType(
        OscalPageActions.catalogPageOpened,
        OscalPageActions.controlFamilyPageOpened,
        OscalPageActions.controlPageOpened
      ),
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

  //this is the same thing as above except the ofType arg
  //cant figure out how to use router store params on refresh correctly
  // loadControlFamily = createEffect(() => {
  //   return this.actions.pipe(
  //     ofType(OscalPageActions.controlFamilyPageOpened),
  //     concatLatestFrom(() =>
  //       this.store
  //         .select(routeCatalogId)
  //         .pipe(filter((catalogId): catalogId is string => catalogId != null))
  //     ),
  //     switchMap(([, catalogId]) =>
  //       this.catalogService.getCatalog(catalogId).pipe(
  //         map((rootCatalog) =>
  //           OscalApiActions.fetchCatalogSuccess({
  //             currentCatalog: rootCatalog.catalog,
  //           })
  //         ),
  //         catchError((error) =>
  //           of(OscalApiActions.fetchCatalogFailure({ error }))
  //         )
  //       )
  //     )
  //   );
  // });
}
