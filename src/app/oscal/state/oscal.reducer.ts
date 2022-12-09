import { createReducer, on } from "@ngrx/store";
import { Catalog, Group } from "../models/oscal-models";
import { OscalApiActions } from "./actions";

export const OSCAL_FEATURE_KEY = 'oscal';

export interface OscalState {
    error: string,
    currentCatalog: Catalog,
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
    on(OscalApiActions.fetchCatalogSuccess, (state, action): OscalState => {
        return {
            ...state,
            currentCatalog: action.currentCatalog,
            error: ''
        }
    })
)