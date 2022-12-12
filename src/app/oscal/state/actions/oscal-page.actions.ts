import { createAction } from "@ngrx/store";

export const catalogPageOpened = createAction(
    '[Oscal Page] Catalog page opened'
);

export const controlFamilyPageOpened = createAction(
    '[Oscal Page] Control family page opened'
);

export const controlPageOpened = createAction(
    '[Oscal Page] Control page opened'
);