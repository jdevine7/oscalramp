import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { } from '../../../assets/800-53-rev-5.json'
import { Catalog, RootCatalog } from '../models/oscal-models';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  private url = '../../../assets/800-53-rev-5.json'
  
  constructor(private http: HttpClient) { }

  getCatalog(): Observable<RootCatalog> {
    return this.http.get(this.url) as Observable<RootCatalog>;
  }
}
