import { routerReducer, RouterReducerState } from '@ngrx/router-store';

export interface State {
  router: RouterReducerState;
  //core state
  //shared state
  //feature modules will be extended to maintain lazy load boundaries
}

export const appReducer = {
  router: routerReducer,
  //core state
  //shared state
  //feature modules will be extended to maintain lazy load boundaries
};
