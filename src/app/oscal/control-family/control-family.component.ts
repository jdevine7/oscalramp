import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/app.state';
import { getCurrentControlFamily } from '../state';
import { controlFamilyPageOpened } from '../state/actions/oscal-page.actions';

@Component({
  selector: 'app-control-family',
  templateUrl: './control-family.component.html',
  styleUrls: ['./control-family.component.scss']
})
export class ControlFamilyComponent implements OnInit {
  controlFamily = this.store.select(getCurrentControlFamily) 
  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(controlFamilyPageOpened());
  }
}
