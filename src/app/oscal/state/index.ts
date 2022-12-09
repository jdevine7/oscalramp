import { createFeatureSelector, createSelector } from '@ngrx/store'
import { selectRouterParam } from 'src/app/router/router.selectors';
import * as AppState from 'src/app/state/app.state'
import { OscalState, OSCAL_FEATURE_KEY } from './oscal.reducer'

export interface State extends AppState.State {
    oscalState: OscalState
}

const getOscalState = createFeatureSelector<OscalState>(OSCAL_FEATURE_KEY);

export const catalogId = selectRouterParam('catalogId')

export const getCurrentCatalog = createSelector(
    getOscalState,
    state => state.currentCatalog
)