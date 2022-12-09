import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { RouterModule, Routes } from '@angular/router';
import { ControlFamilyListComponent } from './control-family-list/control-family-list.component';
import { StoreModule } from '@ngrx/store';
import { oscalReducer, OSCAL_FEATURE_KEY } from './state/oscal.reducer';
import { EffectsModule } from '@ngrx/effects';
import { OscalEffects } from './state/oscal.effects';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ControlFamilyComponent } from './control-family/control-family.component';
import { ControlListComponent } from './control-list/control-list.component';

const oscalRoutes: Routes = [
  {
    path: 'catalog',
    children: [
      {
        path: ":catalogId",
        component: CatalogComponent
      },
      {
        path: ":catalogId/family",
        children: [
          {
            path: ":familyId",
            component: ControlFamilyComponent
          }
        ]
      }
    ]
  }
]

@NgModule({
  declarations: [
    CatalogComponent,
    ControlFamilyListComponent,
    ControlFamilyComponent,
    ControlListComponent
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
