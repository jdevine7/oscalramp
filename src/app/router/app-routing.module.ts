import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { HomeComponent } from '../components/home/home.component';
import { ROUTER_FEATURE_KEY } from './router.selectors';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'oscal',
    loadChildren: () =>
      import('../oscal/oscal.module').then((m) => m.OscalModule),
  },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    StoreRouterConnectingModule.forRoot({
      stateKey: ROUTER_FEATURE_KEY,
      routerState: RouterState.Minimal,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
