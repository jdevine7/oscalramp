import { createReducer, on } from "@ngrx/store";
import { Catalog } from "../models/oscal-models";
import { OscalApiActions, OscalPageActions } from "./actions";

export const OSCAL_FEATURE_KEY = 'oscal';

export interface OscalState {
    error: string,
    currentCatalog: Catalog
}

//barf
const initState: OscalState = {
    error: '',
    currentCatalog: { 
        uuid: '',
        metadata: {
            title: '',
            'last-modified': '',
            version: '',
            'oscal-version': '',
            props: [],
            links: [],
            roles: [],
            parties: [],
            'responsible-parties': []
        },
        groups: [],
        'back-matter': {
            resources: []
        }
    }
}

export const oscalReducer = createReducer<OscalState>(
    initState,
    on(OscalPageActions.catalogPageOpened, (state): OscalState => {
        return {
            ...state,
            error: ''
        }
    }),
    on(OscalApiActions.fetchCatalogSuccess, (state, action): OscalState => {
        return {
            ...state,
            currentCatalog: action.currentCatalog,
            error: ''
        }
    }),
)