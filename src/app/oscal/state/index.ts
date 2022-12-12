import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectRouterParam } from 'src/app/router/router.selectors';
import * as AppState from 'src/app/state/app.state';
import { OscalState, OSCAL_FEATURE_KEY } from './oscal.reducer';

export interface State extends AppState.State {
  oscalState: OscalState;
}

const getOscalState = createFeatureSelector<OscalState>(OSCAL_FEATURE_KEY);

export const routeCatalogId = selectRouterParam('catalogId');
export const familyId = selectRouterParam('familyId');
export const controlId = selectRouterParam('controlId');

export const getCurrentCatalog = createSelector(
  getOscalState,
  (state) => state.currentCatalog
);

export const getCurrentControlFamily = createSelector(
  getOscalState,
  familyId,
  (state, familyId) => {
    return state.currentCatalog.groups.find((g) => g.id === familyId);
  }
);

export const getCurrentControl = createSelector(
  getOscalState,
  familyId,
  controlId,
  (state, familyId, controlId) => {
    const controlFamily = state.currentCatalog.groups.find((g) => g.id === familyId);
    return controlFamily?.controls.find((c) => c.id === controlId);
  }
);