import { Component, OnInit } from '@angular/core';
import { RootCatalog } from '../models/oscal-models';
import { CatalogService } from '../services/catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  rootCatalog!: RootCatalog;

  title: string = ''

  constructor(private catalogService: CatalogService) { }

  ngOnInit(): void {
    this.catalogService.getCatalog().subscribe(catalog => {
      this.rootCatalog = catalog;
    })
  }
}
