import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { RouterModule, Routes } from '@angular/router';
import { ControlGroupListComponent } from './control-group-list/control-group-list.component';
import { StoreModule } from '@ngrx/store';
import { oscalReducer, OSCAL_FEATURE_KEY } from './state/oscal.reducer';
import { EffectsModule } from '@ngrx/effects';
import { OscalEffects } from './state/oscal.effects';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const oscalRoutes: Routes = [
  {
    path: 'catalog',
    children: [
      {
        path: ":catalogId",
        component: CatalogComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    CatalogComponent,
    ControlGroupListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(oscalRoutes),
    StoreModule.forFeature(OSCAL_FEATURE_KEY, oscalReducer),
    EffectsModule.forFeature([OscalEffects]),
    FontAwesomeModule
  ]
})
export class OscalModule { }
