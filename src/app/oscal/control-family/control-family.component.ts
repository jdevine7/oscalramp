import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/state/app.state';
import { Group } from '../models/oscal-models';
import { getCurrentControlFamily } from '../state';
import { controlFamilyPageOpened } from '../state/actions/oscal-page.actions';

@Component({
  selector: 'app-control-family',
  templateUrl: './control-family.component.html',
  styleUrls: ['./control-family.component.scss']
})
export class ControlFamilyComponent implements OnInit {
  //why do i need | undefined ?
  controlFamily!: Observable<Group | undefined>;
  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(controlFamilyPageOpened());
    this.controlFamily = this.store.select(getCurrentControlFamily)
  }
}
