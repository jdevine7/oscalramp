import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/state/app.state';
import { Catalog } from '../models/oscal-models';
import { getCurrentCatalog } from '../state';
import { catalogPageOpened } from '../state/actions/oscal-page.actions';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  catalog!: Observable<Catalog>;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(catalogPageOpened());
    this.catalog = this.store.select(getCurrentCatalog)
  }

}
