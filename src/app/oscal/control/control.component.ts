import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/state/app.state';
import { getCurrentControl } from '../state';
import { controlPageOpened } from '../state/actions/oscal-page.actions';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {
  control = this.store.select(getCurrentControl);
  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.store.dispatch(controlPageOpened());
  }
}
