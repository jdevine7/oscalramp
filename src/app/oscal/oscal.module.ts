import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { RouterModule, Routes } from '@angular/router';
import { ControlGroupListComponent } from './control-group-list/control-group-list.component';

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
  ]
})
export class OscalModule { }
