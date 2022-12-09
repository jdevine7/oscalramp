import { createAction, props } from "@ngrx/store";
import { Catalog, Group } from "../../models/oscal-models";

export const fetchCatalogSuccess = createAction(
    '[Oscal API] Fetch catalog success',
    props<{ currentCatalog: Catalog }>()
);
export const fetchCatalogFailure = createAction(
    '[Oscal API] Fetch catalog failure',
    props<{ error: string }>()
);