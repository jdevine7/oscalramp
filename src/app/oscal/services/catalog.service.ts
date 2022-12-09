import { HttpClient } from '@angular/common/http';
import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RootCatalog } from '../models/oscal-models';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  constructor(private http: HttpClient) { }

  getCatalog(catalogId: string): Observable<RootCatalog> {
    const fakeJsonUrl = `../../../assets/${catalogId}.json`
    return this.http.get(fakeJsonUrl) as Observable<RootCatalog>;
  }
}
